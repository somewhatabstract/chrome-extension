const { merge } = require('webpack-merge');
const common = require('./rspack.common.js');

module.exports = merge(common, {
    devtool: 'inline-source-map',
    mode: 'development'
});