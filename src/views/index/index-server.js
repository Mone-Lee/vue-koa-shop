// const Vue = require('vue');

// const app = new Vue({
//     data:{
//         name:"vue koa homepage"
//     },
//     template:`
//         <p>{{ name }}</p>
//     `,
// })

// module.exports = app;
import { createApp } from './app'

export default context => {
  const { app } = createApp()
  return app
}