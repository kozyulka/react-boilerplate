var webpack = require('webpack');
var webpackProvidePlugin = new webpack.ProvidePlugin({
    '$': 'jquery',
    'jQuery': 'jquery'
});

var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    entry: [
        'script-loader!jquery/dist/jquery.min.js',
        'script-loader!foundation-sites/dist/js/foundation.min.js/',
        // 'foundation-sites!foundation-sites.config.js',
        __dirname + '/app/index.js'
    ],
    externals: {
        'jquery': 'jQuery'
    },
    devServer: {
        inline: true,
        contentBase: './app',
        port: 8000
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /foundation\/js\//,
                loader: 'imports?jQuery=jquery'
            }
        ],
        // rules: [{
        //     test: /\.scss$/,
        //     use: [{
        //         loader: "style-loader" // creates style nodes from JS strings
        //     }, {
        //         loader: "css-loader" // translates CSS into CommonJS
        //     }, {
        //         loader: "sass-loader" // compiles Sass to CSS
        //     }]
        // }]
    },
    output: {
        filename: 'transformed.js',
        path: __dirname + '/build'
    },
    plugins: [ HTMLWebpackPluginConfig, webpackProvidePlugin ]
};

