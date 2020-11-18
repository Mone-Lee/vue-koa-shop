const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        library: [
            'vue',
            'vuex'
        ]
    },
    output: {
        filename: '[name]_[chunkhash].dll.js',
        path: path.resolve(__dirname, '../library'),  // 不输出到dist是因为设置了每次打包都会清楚dist目录
        library: '[name]'   // 暴露出的库的名字
    },
    plugins: [
        new webpack.DllPlugin({
            name: '[name]_[hash]',
            path: path.resolve(__dirname, '../library/[name].json')
        })
    ]
}