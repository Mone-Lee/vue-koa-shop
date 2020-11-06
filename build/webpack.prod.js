'use strict';

const glob = require('glob');
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')

const setMap = () => {
    const entry = {};
    const htmlWebpackPlugins = [];
    const vueSSRClientPlugins = [];

    const entryFiles = glob.sync(path.join(__dirname, '../src/views/*/index.js'));
    Object.keys(entryFiles)
        .map(index => {
            const entryFile = entryFiles[index];
            const match = entryFile.match(/src\/views\/(.*)\/index.js/);
            const pageName = match && match[1];

            entry[pageName] = entryFile;

            vueSSRClientPlugins.push(new VueSSRClientPlugin({
                filename: `server/${pageName}/vue-ssr-client-manifest.json`//dist目录
            }))

            // 一个页面对应一个plugin,多个页面就要多个
            htmlWebpackPlugins.push(
                new HtmlWebpackPlugin({
                    template: path.join(__dirname, `../src/views/${pageName}/index.html`),
                    filename: `${pageName}.html`,
                    chunks: [pageName],
                    inject: true,
                    minify: {
                        html5: true,
                        collapseWhitespace: true,
                        preserveLineBreaks: false,
                        minifyCSS: true,
                        minifyJS: true,
                        removeComments: false
                    }
                })
            )
        })
    return {
        entry,
        htmlWebpackPlugins,
        vueSSRClientPlugins
    }
}

const { entry, htmlWebpackPlugins, vueSSRClientPlugins } = setMap();

module.exports = merge(baseConfig, {
    mode: 'production',
    entry: entry,
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
            'process.env.VUE_ENV': '"client"'
        }),
    ].concat(htmlWebpackPlugins).concat(vueSSRClientPlugins),
    optimization: {
        splitChunks: {
            minSize: 0,
            cacheGroups: {
                commons: {
                    name: 'commons',
                    chunks: 'all',
                    minChunks: 2
                }
            }
        }
    },
})