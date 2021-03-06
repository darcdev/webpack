const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    mode : 'development',
    entry : { 
        "home" : path.resolve(__dirname ,'src/js/index.js'),
    },
    output : {
        path : path.resolve(__dirname , 'dist'),
        filename : 'js/[name].js'
    },
    devServer : {
        open : true,
        port : 9000,
    },
    module : {
        rules : [
            {
                test : /\.css$/,
                use : [ 'style-loader','css-loader']
            },
            {
                test : /\.less$/,
                use : [ 'style-loader','css-loader','less-loader']
            },
            {
                test : /\.scss$/,
                use : [ 'style-loader','css-loader','sass-loader']
            },
            {
                test : /\.styl$/,
                use : [ 'style-loader','css-loader','stylus-loader']
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
         new MiniCssExtractPlugin({
             filename : 'css/[name].css'
         }),
         new HtmlWebpackPlugin({
             title : 'React',
             template : path.resolve(__dirname , 'index.html')
         })

    ]

}