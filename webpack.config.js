const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const path = require('path');

module.exports = {
    target: 'node',

    mode: 'production',

    entry: './src/server-main.js',

    module: {
        rules: [
            { test: /\.vue$/, loader: 'vue-loader' },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            }
        ]
    },

    plugins: [
        new VueLoaderPlugin(),
        // 模板文件
        new HtmlWebpackPlugin({
            template: 'public/index.html'
        })
    ],

    resolve: {
        mainFields: ['main', 'module']
    },

    output: {
        filename: '[name].[contenthash].js',
        libraryTarget: "commonjs"
    }

};
