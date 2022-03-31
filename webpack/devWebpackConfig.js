const createWebpackConfig = require('./createWebpackConfig');
const proxyConfig = require('./proxyConfig');

const devWebpackConfig = createWebpackConfig({
    config: {
        mode: 'development',
        devServer: {
            port: 9002,
            historyApiFallback: true,
            server: 'https',
            proxy: proxyConfig
        },
        watchOptions: {
            poll: 500,
            ignored: /node_modules/
        },
        devtool: 'inline-source-map'
    },
    htmlWebpackPluginArgs: {
        favicon: './src/assets/favicon-dev.ico'
    },
    environmentPluginMap: {
        NODE_ENV: 'development'
    }
});

module.exports = devWebpackConfig;
