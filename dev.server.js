'use strict';
const colors = require('colors');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const fs = require('fs');
const argv = require('yargs').argv

const port = argv.port || 8080;

let webpackConfig = require('./webpack.config.js');
webpackConfig.entry['webpack_hm_client'] = `webpack-dev-server/client?http://localhost:${port}/`;
const compiler = webpack(webpackConfig);

var server = new WebpackDevServer(compiler, {
  contentBase: 'bin/',
  publicPath: '/js/',
  compress: true
});
server.listen(port, 'localhost', function () {
});
