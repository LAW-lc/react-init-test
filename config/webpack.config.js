const path = require("path");
const webpack = require("webpack");

const HtmlWebPackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {

    mode: "devalopment",

    entry: path.resolve(__dirname, "..", "src/index.tsx"),

    // output: {
    //     filename: "bundle.js",
    //     path: path.resolve(__dirname,"..", "dist")
    // },

    // resolver 帮助 webpack 从每个 require/import 语句中
    resolve:{
        extensions: [".tsx", ".ts", ".js", ".json", ".jsx"]
    },

     // 文件处理规则
     module: {
        rules: [{
            test: /\.(ts|js)x?$/, loader: 'babel-loader', exclude: /node_modules/
        },
        {
            test: /\.(ts|tsx)$/,
            loader: "ts-loader",
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
        }, {
            test: /\.(png|jp(e*)g|svg)$/,
            use: [{
                loader: 'url-loader',
                // 降低loader版本，启用CommonJS模块语法
                options: {
                    esModule: false
                }
            }]
        }, {
            test: /\.less$/,
            use: [
                {
                    loader: 'style-loader', // creates style nodes from JS strings
                },
                {
                    loader: 'css-loader', // translates CSS into CommonJS
                },
                {
                    loader: 'less-loader', // compiles Less to CSS

                },
            ],
        }
        ]

    },

    devServer: {    //这是dev-server命令的第二种方式
        contentBase: "src",
        open: true,
        port: 2000,
        hot: true
    },

    plugins: [
        new HtmlWebPackPlugin({
            template: "public/index.html",
            filename: "index.html",
            inject: true
        }),
        new BundleAnalyzerPlugin(),
    ]
}


