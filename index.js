const Koa = require('koa');
const Router = require('koa-router');
const Vue = require('vue');

const app = new Koa();
const router = new Router();

const renderer = require('vue-server-renderer').createRenderer();
const homePage = new Vue({
    data:{
        name:"vue koa homepage"
    },
    template:`
        <p>{{ name }}</p>
    `,
})
// const homePage = require('./src/app');

router.get('/home', async (ctx, next) => {
    const htmlContent = await renderer.renderToString(homePage);

    ctx.status = 200;
    ctx.body = htmlContent;
})

app
    .use(router.routes())
    .use(router.allowedMethods())
    .listen(3000, () => {
        console.log('listened 3000')
    })
