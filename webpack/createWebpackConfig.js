/* eslint-disable @typescript-eslint/no-var-requires */
const { resolve, relative, dirname } = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { EnvironmentPlugin } = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { mergeWithRules } = require('webpack-merge');

const createWebpackConfig = ({
    config,
    htmlWebpackPluginArgs,
    environmentPluginMap
}) => mergeWithRules({
    module: {
        rules: {
            test: 'match',
            use: 'replace'
        }
    }
})({
    entry: {
        main: './src/index.tsx'
    },
    output: {
        path: resolve(__dirname, '../dist'),
        filename: '[name].[hash].js'
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: (resourcePath, context) => `${relative(dirname(resourcePath), context)}/`
                        }
                    },
                    'css-loader',
                ]
            },
            {
                test: /\.svg$/,
                loader: 'url-loader'
            },
            {
                test: /\.(woff|woff2|ttf)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 20000,
                            name: './font/[hash].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.tsx?$/,
                use: ['ts-loader'],
                exclude: [/node_modules/]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx']
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: 'src/index.html',
            ...htmlWebpackPluginArgs
        }),
        new EnvironmentPlugin(environmentPluginMap),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        })
    ]
}, config);

module.exports = createWebpackConfig;
