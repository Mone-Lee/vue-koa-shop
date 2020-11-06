module.exports = {
    'index': {
        url: '/index',  // 不能写成根路径'/'，会导航到打包出来的index.html文件，非ssr，暂时未找到原因
        title: '首页',
    },
    'search': {
        url: '/search',
        title: '搜索页',
    }
}