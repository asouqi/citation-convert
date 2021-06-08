const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const {WebpackManifestPlugin} = require('webpack-manifest-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        app: './src/index.js',
    },
    plugins: [
        new webpack.ProvidePlugin({
            process: 'process/browser',
        }),
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            favicon: "./src/icons/favicon.ico"
        }),
        new WebpackManifestPlugin({
            fileName: 'manifest.json'
        })
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.(ttf)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.json$/,
                use: ['json-loader'],
                type: 'javascript/auto'
            }
        ],
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', '.json'],
    },
};