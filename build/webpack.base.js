'use strict';

const glob = require('glob');
const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const isProd = process.env.NODE_ENV === 'production'

const smp = new SpeedMeasurePlugin();
module.exports = smp.wrap({
    output: {
        path: path.join(__dirname, '../dist'),
        filename: '[name].[chunkhash].js',
        publicPath: "/"     // 注意： 需要配置输出的css文件，js文件的位置，不然就是相对于生成的html页面位置，例如在/detail/:id时，css文件和js文件访问就会有问题
    },
    module: {
        rules: [
            { 
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                use: 'babel-loader'
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                  compilerOptions: {
                    preserveWhitespace: false
                  }
                }
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ],
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
                            resources: path.resolve(__dirname, '../src/assets/styles/variables.less'),
                        }
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000
                        }
                    }
                    
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: 'file-loader'
            }
        ]
    },
    plugins: isProd
    ? [
        new VueLoaderPlugin(),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name]_[contenthash:8].css'
        }),
        new FriendlyErrorsPlugin(),
        // new HardSourceWebpackPlugin()
      ]
    : [
        new VueLoaderPlugin(),
        new FriendlyErrorsPlugin(),
        // new HardSourceWebpackPlugin()
    ],
    resolve: {
        alias: {
            'vue': path.resolve(__dirname, '../node_modules/vue/dist/vue.min.js'),
            '@': path.join(__dirname, '../src')
        }
    },
    devtool: 'source-map'
})