/* eslint-disable no-undef */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ElectronReloadPlugin = require('webpack-electron-reload')({ path: path.join(__dirname, './dist/js/main.js') })

module.exports = {
    target: 'electron-main',
    entry: {
        main: './src/main.ts',
        index: './src/Components/Main/index.ts',
    },
    mode: 'development',
    devtool: 'inline-source-map',
    plugins: [
        ElectronReloadPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/Components/Main/index.html'),
            filename: 'index.html',
            inject: true,
            chunks: ['index']
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
                use: [MiniCssExtractPlugin.loader, 'css-loader']
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