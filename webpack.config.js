const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const templatePath = path.resolve(__dirname, './public/index.html');

module.exports = {

    target: 'node',
    mode: 'production',

    entry: './src/server-main.js',

    module: {
        rules: [
            { test: /\.vue$/, loader: 'vue-loader' }
        ]
    },

    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: 'public/index.html'
        })
    ],

    resolve: {
        mainFields: ['main', 'module']
    },

    output: {
        // library: 'app',
        libraryTarget: "commonjs",
        // libraryExport: 'default'
    }

};
