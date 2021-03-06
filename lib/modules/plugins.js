'use strict';

const AssetsPlugin = require('assets-webpack-plugin');
const extend = require('extend');

const TypeOf = require('../utils/typeof');
const ENV = require('../utils/env');

const DEFAULT_ASSETS_PATHS_OPTIONS = {
	filename: 'static-manifest.json',
	entrypoints: true,
	prettyPrint: true,
	update: true,
	useCompilerPath: true,
};

module.exports = function(config) {
	const assetsPluginOptions = TypeOf.isObject(config.assetsPaths)
		? extend(true, {}, DEFAULT_ASSETS_PATHS_OPTIONS, config.assetsPaths)
		: extend(true, {}, DEFAULT_ASSETS_PATHS_OPTIONS);

	if (ENV.isDev()) {
		assetsPluginOptions.keepInMemory = true;
	}

	config.plugins.push(new AssetsPlugin(assetsPluginOptions));

	return config;
};
