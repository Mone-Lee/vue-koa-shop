'use strict';

const glob = require('glob');
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const base = require('./webpack.base.js');
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin');
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')

let webpackConfigMap = {};
const entryFiles = glob.sync(path.join(__dirname, '../src/views/*/index-server.js'));
Object.keys(entryFiles).map(index => {
    const entryFile = entryFiles[index];
    const match = entryFile.match(/src\/views\/(.*)\/index-server.js/);
    const pageName = match && match[1];

    if (pageName) {
        webpackConfigMap[pageName] = merge(base, {
            target: 'node',
            entry: {
                [pageName]: entryFile
            },
            output: {
                filename: '[name]-server.js',
                libraryTarget: 'commonjs2'
            },
            plugins: [
                new webpack.DefinePlugin({
                    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
                    'process.env.VUE_ENV': '"server"'
                }),
                new HtmlWebpackExternalsPlugin({
                    externals: [
                      {
                        module: 'vue',
                        entry: 'https://lib.baomitu.com/vue/2.6.12/vue.js',
                        global: 'Vue',
                      },
                    ],
                }),
                new VueSSRServerPlugin({
                    filename: `server/${pageName}/vue-ssr-server-bundle.json`//dist目录
                })
            ]
        })
    }
})

module.exports = webpackConfigMap;