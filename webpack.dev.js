const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'source-map',
    output: {
        filename: 'autoback-cl.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        host: "localhost"
    }
});
