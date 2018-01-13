const webpack = require('webpack');
const path = require('path');

let config = {
    entry: {
        main: 'index.js'
    },
    output: {
        filename: '[name]__[hash].js',
        path: path.resolve(__dirname, 'build'),
        publicPath: '',
    },
    devServer: {
        contentBase: 'build',
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
};

module.exports = config;
