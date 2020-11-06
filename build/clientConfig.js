'use strict';

const glob = require('glob');
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const base = require('./webpack.base.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')

let webpackConfigMap = {};
const entryFiles = glob.sync(path.join(__dirname, '../src/views/*/index.js'));
Object.keys(entryFiles).map(index => {
    const entryFile = entryFiles[index];
    const match = entryFile.match(/src\/views\/(.*)\/index.js/);
    const pageName = match && match[1];

    if (pageName) {
        webpackConfigMap[pageName] = merge(base, {
            mode: 'production',
            entry: {
                [pageName]: entryFile
            },
            plugins: [
                new webpack.DefinePlugin({
                    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
                    'process.env.VUE_ENV': '"server"'
                }),
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
                }),
                new VueSSRClientPlugin({
                    filename: `server/${pageName}/vue-ssr-client-manifest.json`//dist目录
                })
            ],
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
            devtool: 'cheap-source-map'
        })
    }
})

module.exports = webpackConfigMap;