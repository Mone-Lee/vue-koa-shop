'use strict';

const glob = require('glob');
const path = require('path');
const VueLoaderPlugins = require('vue-loader/lib/plugin');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

const setMap = () => {
    const entry = {};
    const htmlWebpackPlugins = [];

    const entryFiles = glob.sync(path.join(__dirname, 'src/views/*/index.js'));
    Object.keys(entryFiles)
        .map(index => {
            const entryFile = entryFiles[index];
            const match = entryFile.match(/src\/views\/(.*)\/index.js/);
            const pageName = match && match[1];

            entry[pageName] = entryFile;

            // 一个页面对应一个plugin,多个页面就要多个
            htmlWebpackPlugins.push(
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
                })
            )
        })

    return {
        entry,
        htmlWebpackPlugins
    }
}

const { entry, htmlWebpackPlugins } = setMap();

module.exports = {
    mode: 'development',
    entry: entry,
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
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
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader',
                    {
                        loader: 'sass-resources-loader',
                        options: {
                            resources: path.resolve(__dirname, './src/assets/styles/variables.less'),
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
                            limit: 10240
                        }
                    }
                    
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: 'file-loader'
            }
        ]
    },
    plugins: [
        new VueLoaderPlugins(),
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin(),
        new FriendlyErrorsWebpackPlugin()
    ].concat(htmlWebpackPlugins),
    resolve: {
        alias: {
            'vue': path.resolve(__dirname, './node_modules/vue/dist/vue.min.js'),
            '@': path.join(__dirname, './src')
        }
    },
    devServer: {
        contentBase: './dist',
        hot: true,
        // stats: 'errors-only'
    },
    devtool: 'cheap-source-map'
}