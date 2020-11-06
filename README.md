# vue-koa-shop
在已有vue开发的商城项目的基础上，引入koa，实现服务端渲染


## 运行命令
1. `npm run dev`  
    线上开发（支持热更新）
2. `npm run build:client`（**摸索期间测试命令，可忽略**）   
    客户端打包    
    等同于非ssr情况下的正常打包, 注意生成的 `dist/server/${pageName}/vue-ssr-client-manifest.json` 文件
3. `npm run build:server`（**摸索期间测试命令，可忽略**）  
    打包ssr环境   
    多页面模式下，对每个ssr入口都要执行一次webpack打包，生成对应的`vue-ssr-client-manifest.json`文件  
4. `npm run build:ssr`   
    按顺序执行客户端打包(`build/clientConfig.js`)和 ssr打包（`build/serverConfig.js`），  
    多页面模式下，对每个ssr入口都要执行一次webpack打包，生成对应的`dist/server/${pageName}vue-ssr-client-manifest.json`文件 和 `dist/server/${pageName}/vue-ssr-server-hundle.json` 文件，  
    之后执行`node server/index.js`可访问查看ssr后的页面效果
5. `node server/index.js`  
    开启服务器端，默认使用3000端口，查看ssr渲染效果

正常开发使用`npm run dev`快速进行开发（loacalhost:8080），  
开发完成后使用`npm run build:ssr`和`node server/index.js`查看ssr效果（loacalhost:3000/index, loacalhost:3000/search）


## 参考链接   
1. 【Vue.js 服务器端渲染指南】https://ssr.vuejs.org/zh/  
2. 【webpack中文文档】https://www.webpackjs.com/concepts/  
3. 【Vue 2.x + Webpack 3.x + Nodejs 多页面项目框架】https://www.cnblogs.com/kenkofox/p/8018476.html   