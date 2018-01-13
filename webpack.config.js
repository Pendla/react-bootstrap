const path = require('path');
const webpack = require('webpack');

//
// PLUGINS
//
const HtmlWebpackPlugin = require('html-webpack-plugin');

//
// CONFIG
//
let config = {
    entry: {
        main: 'index.js'
    },
    output: {
        filename: '[name]__[hash].js',
        path: path.resolve(__dirname, 'public'),
        publicPath: '',
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        port: 3000,
    },
    resolve: {
        modules: ['src', 'node_modules'],
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ['react']
                }
            }]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: path.resolve(__dirname, 'public', 'index.html'),
            template: path.resolve(__dirname, 'src', 'index.html'),
            title: 'React Bootstrap', // :REPLACE:
            inject: true,
            xhtml: true,
            favicon: undefined, // :REPLACE:
            cache: true,
            showErrors: true,
        }),
    ]
};

module.exports = config;
