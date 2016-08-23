'use strict';
const colors = require('colors');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const fs = require('fs');

let webpackConfig = require('./webpack.config.js');
webpackConfig.entry.unshift('webpack-dev-server/client?http://localhost:8080/');
const compiler = webpack(webpackConfig);

var server = new WebpackDevServer(compiler, {
  contentBase: 'bin/',
  publicPath: '/js/',
  compress: true
});
server.listen(8080, 'localhost', function () {
});
