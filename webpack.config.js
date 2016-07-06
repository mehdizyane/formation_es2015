var webpack = require("webpack");

module.exports = {
    entry: './site/main.js',
    output:{
        path: __dirname,
        filename: './site/bundle.js'
    },
    devtool: 'source-map',
    module:{
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader',
            query:{
                plugins: ['babel-plugin-transform-es2015-modules-commonjs'],
                presets: ['es2015'],
                cacheDirectory:true
            }
        }]
    }
};