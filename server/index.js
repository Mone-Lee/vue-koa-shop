const Koa = require('koa');
const Router = require('koa-router');
const static = require('koa-static');
const fs = require('fs');
const path = require('path');
const LRU = require('lru-cache');

const app = new Koa();
const router = new Router();

app.use(
    static(__dirname + '../dist/')
)

// const createApp = require('../app');
const { createBundleRenderer } = require('vue-server-renderer');
const createRenderer = (bundle, options) => createBundleRenderer(bundle, Object.assign(options, {
    // for component caching
    cache: LRU({
        max: 1000,
        maxAge: 1000 * 60 * 15
    }),
    // recommended for performance
    runInNewContext: false
}));
const template = fs.readFileSync(path.resolve(__dirname, '../src/views/index/index.html'), 'utf-8');
const bundle = require('../dist/vue-ssr-server-bundle.json');
const clientManifest = require('../dist/vue-ssr-client-manifest.json');
let renderer = createRenderer(bundle, {
    template,
    clientManifest
});

let render = (ctx, next) => {
    const context = { url: ctx.url, title: 'VueSSR 多页面' };
    renderer.renderToString(context, (err, html) => {
        if (err) {
            if (err.code === 404) {
                // res.status(404).end('Page not found')
                ctx.status = 404;
                ctx.body = 'Page not found';
            } else {
                // res.status(500).end('Internal Server Error')
                ctx.status = 500;
                ctx.body = 'Internal Server Error';
            }
        } else {
            // res.end(html)
            ctx.status = 200;
            ctx.body = html;
        }
    })
}

router.get('/', async (ctx, next) => {
    render(ctx, next);
})

app
    .use(router.routes())
    .use(router.allowedMethods())
    .listen(3000, () => {
        console.log('Server is running on port 3000')
    })
