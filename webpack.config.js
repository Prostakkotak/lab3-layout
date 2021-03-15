const path = require('path'),
    MiniCssExtractPlugin = require('mini-css-extract-plugin'),
    BrowserSyncPlugin = require('browser-sync-webpack-plugin'),
    CSSNanoPlugin = require('cssnano-webpack-plugin'),
    TerserPlugin = require('terser-webpack-plugin');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, './assets/'),
    mode: 'development',
    entry: {
        index: [
            './js/index.js'
        ],
        styles: [
            './styles/style.scss'
        ]
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './src')
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true }
                    }, {
                        loader: 'sass-loader',
                        options: { sourceMap: true }
                    }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.css'
        }),
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3000,
            files: '../*.html',
            server: { baseDir: ['./'] }
        })
    ],
    optimization: {
        minimizer: [
            new TerserPlugin(),
            new CSSNanoPlugin({
                cssProcessorOptions: {
                    "preset": "advanced",
                    "safe": true,
                    "map": { "inline": false },
                },
            })
        ]
    }
}