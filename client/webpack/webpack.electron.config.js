const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, '../src', 'window.ts'),
    output: {
        filename: 'main.window.js',
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/'
    },
    target: 'electron-main',
    resolve: {
        extensions: ['.ts', '.js'],
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'ts-loader'
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ['main.window.js', 'main.window.js.map']
        })
    ]
}