const Koa = require('koa');
const Router = require('koa-router');
const static = require('koa-static');
const fs = require('fs');
const path = require('path');
const LRU = require('lru-cache');
const dataCache = require('./dataCache');

const rpcClient = require('./rpcClient');

const protobuf = require('protocol-buffers');
const schemas = protobuf(fs.readFileSync(path.resolve(__dirname, '../backend/play.proto')));

const app = new Koa();
const router = new Router();

app.use(static(path.resolve(__dirname , '../dist/')));

const { createBundleRenderer } = require('vue-server-renderer');
const createRenderer = (bundle, options) => createBundleRenderer(bundle, Object.assign(options, {
    // for component caching
    cache: LRU({
        max: 1000,
        maxAge: 1000 * 60 * 15
    }),
    runInNewContext: false,
    inject: false
}));

let rendererMap = {};
const template = fs.readFileSync(path.resolve(__dirname, './index.template.html'), 'utf-8');
const pageRoutes = require('./router.js');
const { socket } = require('./rpcClient');
for(let pageName in pageRoutes) {
    const bundle = require(`../dist/server/${pageName}/vue-ssr-server-bundle.json`);
    const clientManifest = require(`../dist/server/${pageName}/vue-ssr-client-manifest.json`);
    // 针对每个ssr入口，生成一个bundle render
    rendererMap[pageName] = createRenderer(bundle, {
        template,
        clientManifest
    });
}

const render = async (pageName, ctx) => {
    let context = {
        url: ctx.url,
        title: pageRoutes[pageName].title,
        cachekey: pageName
    };

    if(ctx.params && ctx.params.columnid) {
        context.columnid = ctx.params.columnid
    }

    // 判断是否有缓存，有缓存数据则读缓存里的数据
    if (dataCache.has(pageName)) {
        context = Object.assign({}, dataCache.peek(pageName), context);
    }

    const html = await rendererMap[pageName].renderToString(context);
    if(!dataCache.has(pageName)) {
        dataCache.set(pageName, context);
    }

    ctx.status = 200;
    ctx.body = html;
}

for(let pageName in pageRoutes) {
    let pageConfig = pageRoutes[pageName];
    router.get(pageConfig.url, async (ctx) => {
        if(pageName === 'play' && ctx.params && ctx.params.columnid) {

            const result = await new Promise((resolve, reject) => {
                rpcClient.write({
                    columnid: ctx.params.columnid
                }, function (err, data) {
                    err ? reject(err) : resolve(data)
                })
            })

            ctx.status = 200;
    
            ctx.body = result;
        } else {
            await render(pageName, ctx)
        }
    })
}

// 客户端从缓存中获取对应的初始化页面数据，而不是从window.__INITIAL_STATE__中获取，防止数据过多暴露
router.get('/route-cache/:key', async (ctx) => {
    let key = ctx.params.key;
    ctx.body = dataCache.peek(key);
});

app
    .use(router.routes())
    .use(router.allowedMethods())
    .listen(3000, () => {
        console.log('Server is running on port 3000')
    })
