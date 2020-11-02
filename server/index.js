const Koa = require('koa');
const Router = require('koa-router');
const static = require('koa-static');

const app = new Koa();
const router = new Router();

app.use(
    static(__dirname + '../dist/')
)


// const homeSSR = require('../dist/index-server');
const renderMarkup = (str) => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=<device-width>, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <div id="root">${str}</div>
    </body>
    </html>`;
}

const renderer = require('vue-server-renderer').createRenderer();
const homePage = require('../src/views/index/index-server.js');

router.get('/', async (ctx, next) => {
    const htmlContent = await renderer.renderToString(homePage);
    const html = renderMarkup(htmlContent);
    ctx.status = 200;
    ctx.body = html;
})

app
    .use(router.routes())
    .use(router.allowedMethods())
    .listen(3000, () => {
        console.log('Server is running on port 3000')
    })
