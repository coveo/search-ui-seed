const webpack = require('webpack');
const minimize = process.argv.indexOf('--minimize') !== -1;
const colors = require('colors');
const failPlugin = require('webpack-fail-plugin');
if (minimize) {
  console.log('Building minified version of the library'.bgGreen.red);
} else {
  console.log('Building non minified version of the library'.bgGreen.red);
}

const fileName = `coveo.extension`;

// Fail plugin will allow the webpack ts-loader to fail correctly when the TS compilation fails
var plugins = [failPlugin];

if (minimize) {
  plugins.push(new webpack.optimize.UglifyJsPlugin());
}


module.exports = {
  entry: ['./src/Index'],
  output: {
    path: require('path').resolve('./bin/js'),
    filename: minimize ? `${fileName}.min.js` : `${fileName}.js`,
    libraryTarget: 'umd',
    library: 'CoveoExtension',
    publicPath: '/js/'
  },
  externals: {
    "coveo-search-ui":"Coveo"
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  devtool: 'source-map',
  module: {
    rules: [{
      test: /\.ts$/, 
      loader: 'ts-loader'
    }]
  },
  plugins: plugins,
  bail: true
}
