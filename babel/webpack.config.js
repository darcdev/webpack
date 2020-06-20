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
                test : /\.js$/,
                use : 'babel-loader',
                exclude : /node_modules/
            }
        ]
    },
    plugins : [
         new MiniCssExtractPlugin({
             filename : 'css/[name].css'
         }),
         new HtmlWebpackPlugin({
             title : 'Plugins'
         })

    ]

}