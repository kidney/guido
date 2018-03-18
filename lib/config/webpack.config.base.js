'use strict';

const paths = require('./paths');

let config = {
    context: paths.appPath,
    output: {
        path: paths.appDist
    },
    module: {},
    plugins: [],
    resolve: {
        modules: [
            paths.ownNodeModules,
            paths.appNodeModules
        ],
        extensions: ['.web.js', '.mjs', '.js', '.json', '.web.jsx', '.jsx'],
        alias: {

        }
    },
    optimization: {
        minimizer: []
    }
};

config = require('../modules/script')(config);
config = require('../modules/style')(config);
config = require('../modules/images')(config);
config = require('../modules/handlebars')(config);

module.exports = config;