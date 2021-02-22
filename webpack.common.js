const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    target: 'electron-main',
    entry: {
        main: './src/main.ts',
        index: './src/Views/Main/index.ts'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/Views/Main/main.html'),
            filename: 'views/main.html',
            inject: true,
            chunks: ['main']
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash].css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, 'dist')
    }
}