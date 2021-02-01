const { VueLoaderPlugin } = require('vue-loader');
const path = require('path');
const webpack = require('webpack');

webpack({
    mode: 'production',

    entry: './src/index.js',
    module: {
        rules: [
            { test: /\.vue$/, loader: 'vue-loader' }
        ]
    },

    plugins: [
        new VueLoaderPlugin()
    ],

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    }
});
