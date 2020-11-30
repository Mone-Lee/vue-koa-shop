# vue-koa-shop
本来是打算做一个商城项目，但是这个项目的重点其实是对node.js和webpack的学习实践，如果做商城项目的话工作量反而偏重在了业务逻辑，所以现在改为参考极客时间做一个业务内容较为基本的项目（包含首页、课程详情页、课程播放页、下载页）。引入koa，实现服务端渲染。

## vue-server-render核心功能记录
1. **Nodejs运行vue组件输出html片段**。这一步，可以理解为虚拟dom运行在Nodejs环境，换算出html的字符串。  
2. **Nodejs把html片段拼接到整个HTML上**，只需要每次把动态部分拼接到模版html上即可。  
3. **对HTML注入数据**。上一步有了HTML，但这个html只是死的字符串，到了浏览器解析后只能是普通的dom，无法启动vue还原为虚拟dom。那么就需要原始的数据，好让客户端重建对应的虚拟dom。  
4. 客户端激活，即浏览器运行vue**重建虚拟dom**。vue会识别到div已经是服务器渲染好的，并不需要重新渲染dom结构，只需要重建虚拟dom，备好数据，绑定事件即可。服务器渲染的输出结果的应用程序的根元素上有一个特殊的属性`data-server-rendered="true"`，让客户端 Vue 知道这部分 HTML 是由 Vue 在服务端渲染的，并且应该以激活模式进行挂载。  
（**需要自行添加 ID 或其他能够选取到应用程序根元素的选择器，否则应用程序将无法正常激活，导致元素绑定的事件无法正常注入。**）

## 项目特殊说明
在node.js的入口文件`/server/index.js`中，为了学习和实践rpc通信（服务器端之间的通信），播放页play的初始化数据没有使用官方推荐的vuex的dispatch异步获取数据。正常开发大家可以统一获取数据的方法。   

由于重点在BFF层，所以项目不涉及数据库的操作，及真正的后端开发。   

项目启动说明：  

ssr效果：    
启动命令`node server/index.js`  
访问首页(`localhost:3000/index`)，下载页(`localhost:3000/download`)，详情页(`localhost:3000/detail/232`);  
启动命令`node backend/server.js`, `node server/index.js`  
访问播放页(`localhost:3000/play/232`)    

普通开发效果：  
启动命令`npm run dev`  
访问首页(`localhost:8080/index.html`)，下载页(`localhost:8080/download.html`)，详情页(`localhost:3000/detail.html?columnid=232`)，播放页(`localhost:3000/play.html?columnid=232`);        


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
6. `node backend/server.js`  
    开启后端服务器，即正常开发时的后端，仅在访问播放页play时必须启动

## 项目目录说明  
backend  
　　模拟真实开发场景时的后端（仅在需要使用rpc通信方法时使用，否则，可以不需要）  
build  
　　环境配置文件文件夹  
server  
　　使用koa实现的BFF层，实现ssr的主要逻辑  
src  
　　正常开发文件夹

## 参考链接   
1. 【Vue.js 服务器端渲染指南】https://ssr.vuejs.org/zh/  
2. 【webpack中文文档】https://www.webpackjs.com/concepts/  
3. 【Vue 2.x + Webpack 3.x + Nodejs 多页面项目框架】https://www.cnblogs.com/kenkofox/p/8018476.html   
4. 【官方例子 Hackernews Demo】https://github.com/vuejs/vue-hackernews-2.0/   
5. 【vue ssr移除window.\_\_INITIAL_STATE__ 注入】https://blog.csdn.net/zhu562002124/article/details/105729321/   
6. 【easy_sock npm链接】https://www.npmjs.com/package/easy_sock  
7. 【protocol-buffers npm链接】https://www.npmjs.com/package/protocol-buffers