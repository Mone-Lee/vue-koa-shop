# vue-koa-shop
在已有vue开发的商城项目的基础上，引入koa，实现服务端渲染


## 运行命令
1. `npm run dev`  
    线上开发（支持热更新）
2. `npm run build:client`   
    客户端打包  
    使用了clean-webpack-plugin插件，每次执行先清空之前打包生成的文件，防止积压；  
    等同于非ssr情况下的正常打包, 注意生成的 `dist/server/${pageName}/vue-ssr-client-manifest.json` 文件
3. `npm run build:server`  
    打包ssr环境   
    多页面模式下，对每个ssr入口都要执行一次webpack打包，生成对应的`vue-ssr-client-manifest.json`文件  
    (注意生成的 `dist/server/${pageName}/vue-ssr-server-hundle.json` 文件）
4. `npm run build`   
    按顺序执行`npm run build:client` 和 `npm run build:server`， 之后执行`node server/index.js`可访问查看ssr后的页面效果
5. `npm run dll`  
    把vue, vuex, element-ui等包打包到一个公共包（build/library/library_[hash].dll.js）中，并在html文件中引用，预编译资源模块， 加快构建速度
6. `node server/index.js`  
    开启服务器端，默认使用3000端口，查看ssr渲染效果