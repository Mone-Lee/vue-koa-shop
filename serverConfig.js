'use strict';

const glob = require('glob');
const path = require('path');
const VueLoaderPlugins = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin');
const webpackDev = require('./webpack.dev');
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')

let webpackConfigMap = {};
const entryFiles = glob.sync(path.join(__dirname, 'src/views/*/index-server.js'));
Object.keys(entryFiles).map(index => {
    const entryFile = entryFiles[index];
    const match = entryFile.match(/src\/views\/(.*)\/index-server.js/);
    const pageName = match && match[1];

    if (pageName) {
        webpackConfigMap[pageName] = {
            target: 'node',
            mode: 'production',
            entry: {
                [pageName]: entryFile
            },
            output: {
                path: path.join(__dirname, 'dist'),
                filename: '[name]-server.js',
                libraryTarget: 'commonjs2'
            },
            module: {
                rules: [
                    { 
                        test: /\.js$/,
                        use: 'babel-loader'
                    },
                    {
                        test: /\.vue$/,
                        use: 'vue-loader'
                    },
                    {
                        test: /\.css$/,
                        use: [
                            MiniCssExtractPlugin.loader,
                            'css-loader'
                        ]
                    },
                    {
                        test: /\.less$/,
                        use: [
                            MiniCssExtractPlugin.loader,
                            'css-loader',
                            {
                                loader: 'postcss-loader',
                                options: {
                                    postcssOptions: {
                                        plugins: [
                                          [
                                            require('autoprefixer')({
                                                browsers: ['last 2 version', '>1%', 'ios 7']    // 兼容的浏览器
                                            })
                                          ],
                                        ],
                                    },
                                }
                            },
                            'less-loader',
                            {
                                loader: 'sass-resources-loader',
                                options: {
                                    resources: path.join(__dirname, 'src/assets/styles/variables.less'),
                                }
                            }
                        ]
                    },
                    {
                        test: /\.(png|svg|jpg|gif)$/,
                        use: [
                            {
                                loader: 'file-loader',
                                options: {
                                    name: '[name]_[hash:8].[ext]'
                                }
                            }
                        ]
                    },
                    {
                        test: /\.(woff|woff2|eot|ttf|otf)$/,
                        use: [
                            {
                                loader: 'file-loader',
                                options: {
                                    name: '[name]_[hash:8].[ext]'
                                }
                            }
                        ]
                    }
                ]
            },
            plugins: [
                new VueLoaderPlugins(),
                new MiniCssExtractPlugin({
                    filename: '[name]_[contenthash:8].css'
                }),
                new OptimizeCssAssetsWebpackPlugin({
                    assetNameRegExp: /\.css$/g,
                    cssProcessor: require('cssnano')
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
                new HtmlWebpackPlugin({
                    template: path.join(__dirname, `src/views/${pageName}/index.html`),
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
                new VueSSRServerPlugin({
                    filename: `server/${pageName}/vue-ssr-server-bundle.json`//dist目录
                })
            ],
            resolve: {
                alias: {
                    'vue': path.resolve(__dirname, './node_modules/vue/dist/vue.min.js'),
                    '@': path.join(__dirname, './src')
                }
            }
        }
    }
})

module.exports = webpackConfigMap;