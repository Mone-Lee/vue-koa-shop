# vue-koa-shop
本来是打算做一个商城项目，但是这个项目的重点其实是对node.js和webpack的学习实践，如果做商城项目的话工作量反而偏重在了业务逻辑，所以现在改为参考极客时间做一个业务内容较为基本的项目（包含首页、课程详情页、课程播放页、下载页）。引入koa，实现服务端渲染。

## vue-server-render核心功能记录
1. **Nodejs运行vue组件输出html片段**。这一步，可以理解为虚拟dom运行在Nodejs环境，换算出html的字符串。  
2. **Nodejs把html片段拼接到整个HTML上**，只需要每次把动态部分拼接到模版html上即可。  
3. **对HTML注入数据**。上一步有了HTML，但这个html只是死的字符串，到了浏览器解析后只能是普通的dom，无法启动vue还原为虚拟dom。那么就需要原始的数据，好让客户端重建对应的虚拟dom。  
4. 客户端激活，即浏览器运行vue**重建虚拟dom**。vue会识别到div已经是服务器渲染好的，并不需要重新渲染dom结构，只需要重建虚拟dom，备好数据，绑定事件即可。服务器渲染的输出结果的应用程序的根元素上有一个特殊的属性`data-server-rendered="true"`，让客户端 Vue 知道这部分 HTML 是由 Vue 在服务端渲染的，并且应该以激活模式进行挂载。  
（**需要自行添加 ID 或其他能够选取到应用程序根元素的选择器，否则应用程序将无法正常激活，导致元素绑定的事件无法正常注入。**）


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
4. 【官方例子 Hackernews Demo】https://github.com/vuejs/vue-hackernews-2.0/   
5. 【vue ssr移除window.\_\_INITIAL_STATE__ 注入】https://blog.csdn.net/zhu562002124/article/details/105729321/   