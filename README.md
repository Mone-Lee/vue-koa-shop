# vue-koa-shop
在已有vue开发的商城项目的基础上，引入koa，实现服务端渲染


## 运行命令
1. npm run dev  
    线上开发（支持热更新）
2. npm run build  
    打包
3. npm run build:ssr  
    打包ssr环境
4. npm run build:stats    
    输出项目构建信息到stats.json文件
5. npm run dll  
    把vue, vuex, element-ui等包打包到一个公共包（build/library/library_[hash].dll.js）中，并在html文件中引用，预编译资源模块， 加快构建速度