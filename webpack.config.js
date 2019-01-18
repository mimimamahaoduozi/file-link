let path = require('path');
let htmlWebpackPlugin =require('html-webpack-plugin');
let clearWebpackPlugin= require('clean-webpack-plugin');
let ExtractPlugin = require('extract-text-webpack-plugin');
let PurifycssWebpack=require('purifycss-webpack');
let glob=require('glob');
let webpack = require('webpack');
const extractCSS = new ExtractPlugin('./css/style.css');
const extractLESS = new ExtractPlugin('./css/less.css');
module.exports ={
    entry: "./src/main.js",
    output: {
        filename: "build.[hash:8].js",
        path: path.resolve('./build')
    },
    devServer: {
        contentBase:'./build',
        port:3000,
        compress:true,//服务器压缩
        open:true,//打开浏览器
        hot:true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader",
            },
            {
                test:/\.css$/, 
                use: extractCSS.extract({
                    // fallback:'style-loader',
                    use:[
                        {loader: "css-loader"}
                    ]
                })
            },
            {
                test: /\.less?$/,
                use: extractLESS.extract({
                    fallback:'style-loader',
                    use:[
                        {loader: "css-loader"},
                        {loader: "less-loader"},
                    ]
                })
            },
            {
                test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf)$/,
                use: [
                    'url-loader'
                ]
            }
        ]
    },
    plugins: [
        extractCSS,
        extractLESS,
        new webpack.HotModuleReplacementPlugin(),
        new clearWebpackPlugin(['./build']),
        new htmlWebpackPlugin({
            template:'./src/index.html',
            title:'李园东的webpack',
            hash:true, //文件名字后加hash值
            minify:{
                removeAttributeQuotes:true,
                collapseWhitespace:true
            }
        }),
        //一定放在下面
        // new PurifycssWebpack({
        //     paths:glob.sync(path.resolve('src/*.html'))
        // }),

    ],
    mode: "development",
    resolve: {

    }
}
