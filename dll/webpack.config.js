const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    mode : 'production',
    entry : { 
        "home" : path.resolve(__dirname ,'src/js/index.js'),
        "contact" : path.resolve(__dirname ,'src/js/contact.js'),
    },
    output : {
        path : path.resolve(__dirname , 'dist'),
        filename : 'js/[name].js',
        publicPath : 'dist/'

    },
    module : {
        rules : [
            {
                test : /\.css$/,
                use : [ {
                  loader: MiniCssExtractPlugin.loader
                } , 'css-loader']
            },
            {
                test : /\.js$/,
                use : 'babel-loader',
                exclude : /node_modules/
            }, {
                test:/\.jpg|png|gif|woff|eot|ttf|svg|mp4|webm$/,
                use : {
                   loader : 'url-loader',
                   options : {
                       limit : 90000
                 }
                },
            }
        ]
    },
    plugins : [
         new webpack.DllReferencePlugin({
             manifest : require('./modules-manifest.json')
         }),
         new MiniCssExtractPlugin({
             filename : 'css/[name].css',
             chunkFilename : 'css/[id].css'
         }),
         new HtmlWebpackPlugin({
             title : 'React',
             template : path.resolve(__dirname , 'index.html')
         })

    ],
}