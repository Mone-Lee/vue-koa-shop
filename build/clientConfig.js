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
            module: {
                rules: [
                    {
                        test: /\.(png|svg|jpg|gif)$/,
                        use: [
                            {
                                loader: 'url-loader',
                                options: {
                                    limit: 10000
                                }
                            },
                            {
                                loader: 'image-webpack-loader',
                                options: {
                                    mozjpeg: {
                                        progressive: true,
                                    },
                                    // optipng.enabled: false will disable optipng
                                    optipng: {
                                        enabled: false,
                                    },
                                    pngquant: {
                                        quality: [0.65, 0.90],
                                        speed: 4
                                    },
                                    gifsicle: {
                                        interlaced: false,
                                    },
                                    // the webp option will enable WEBP
                                    webp: {
                                        quality: 75
                                    }
                                }
                            },
                        ],
                    },
                ]
            },
            plugins: [
                new webpack.DefinePlugin({
                    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
                    'process.env.VUE_ENV': '"client"'
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
            }
        })
    }
})

module.exports = webpackConfigMap;