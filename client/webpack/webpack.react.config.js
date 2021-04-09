const webpack = require('webpack')
const path = require('path')
const HtmlWepbackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: 'development',
    target: 'electron-renderer',
    entry: path.resolve(__dirname, '../src', 'index.tsx'),
    output: {
        path: path.resolve(__dirname, '../dist', 'renderer'),
        filename: 'js/[name].bundle.js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js'],
        mainFields: ['main', 'module', 'browser']
    },
    devtool: 'source-map',
    devServer: {
        host: 'localhost',
        port: 4000,
        historyApiFallback: true,
        compress: true,
        hot: true,
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.(js|ts|tsx|)$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                    'ts-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                            postcssOptions: {
                                config: path.resolve(__dirname, '../postcss.config.js')
                            }
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: { sourceMap: true }
                    }
                ]
            },
            {
                test: /\.(woff?|ttf|eot|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWepbackPlugin({
            template: path.resolve(__dirname, '../public', 'template', 'index.html'),
            inject: 'body'
        }),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ['renderer/**/*']
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /ru/)
    ]
}