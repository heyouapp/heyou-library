const { resolve } = require('path');
const { withUnimodules } = require('@expo/webpack-config/addons');

module.exports = ({ config }) =>
    withUnimodules(config, { projectRoot: resolve(__dirname, '../') });
