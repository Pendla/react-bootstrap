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
        host: '0.0.0.0',
        contentBase: false,
        port: 3000,
        clientLogLevel: 'warning',
        compress: true,
        hot: true,
        overlay: {
            errors: true,
            warnings: true,
        },
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
                    presets: [
                        ['env', { targets: { browsers: ['last 2 versions'] } } ],
                        'stage-3',
                        'react'
                    ]
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
        new webpack.HotModuleReplacementPlugin(),
    ]
};

module.exports = config;
