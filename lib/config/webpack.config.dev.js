'use strict';

const path = require('path');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const Typeof = require('../utils/typeof');

let config = require('./webpack.config.base');

if (Typeof.isUndefined(config.output.filename)) {
    config.output.filename = '[name].js';
}
if (Typeof.isUndefined(config.output.chunkFilename)) {
    config.output.chunkFilename = '[name]-chunk.js';
}

config.output.filename = path.join(config.output.jsDir, config.output.filename);
config.output.chunkFilename = path.join(config.output.jsDir, config.output.chunkFilename);

config.mode = 'development';
config.devtool = false;

config.plugins.unshift(new CaseSensitivePathsPlugin());

module.exports = config;