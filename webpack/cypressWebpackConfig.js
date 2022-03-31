/* eslint-disable */
const createWebpackConfig = require('./createWebpackConfig');

const cypressWebpackConfig = createWebpackConfig({
    config: {
        mode: 'development',
        module: {
            rules: [
                {
                    test: /\.tsx?$/
                }
            ]
        }
    },
    environmentPluginMap: {
        NODE_ENV: 'development'
    }
});

module.exports = cypressWebpackConfig;
