const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode : 'development',
    entry : { 
        "home" : path.resolve(__dirname ,'src/js/index.js'),
    },
    output : {
        path : path.resolve(__dirname , 'dist'),
        filename : 'js/[name].js'
    },
    module : {
        rules : [
            {
                test : /\.css$/,
                use : [{
                    loader : MiniCssExtractPlugin.loader
                }
                ,'css-loader']
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