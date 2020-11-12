module.exports = {
    'index': {
        url: '/index',  // 不能写成根路径'/'，会导航到打包出来的index.html文件，非ssr，暂时未找到原因
        title: '首页',
        name: 'index'
    },
    'detail': {
        url: '/detail/:columnid',
        title: '课程详情',
        name: 'detail'
    },
    'play': {
        url: '/play/:columnid',
        title: '播放页',
        name: 'play'
    },
    'download': {
        url: '/download',
        title: '下载页',
        name: 'download'
    }
}