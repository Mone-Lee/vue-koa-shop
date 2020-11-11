const LRU = require('lru-cache')

const dataCache = new LRU({
    max: 1000,
    maxAge: 1000 * 60 * 15, // 单位为毫秒，这里设置为十五分钟
});

// 需要直接返回对象，作为单例调用，因为需要共享
module.exports = dataCache;