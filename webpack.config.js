var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

// Plugins
var stylesExtract = new ExtractTextPlugin("styles.css", { allChunks: true });

// List of Plugins
var plugins = [
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.HotModuleReplacementPlugin(),
  stylesExtract
];

// Entry points are specified in this module
var entry = require('./webpack/entry');

// Style related tasks are specified in this module
var styles = require('./webpack/styles');

// Presets babel will use to compile
var babelPresets = ['es2015', 'react', 'stage-1'];

// Get style loader
var styleLoader = styles(stylesExtract);

module.exports = {
  devtool: 'source-map',
  entry: entry,
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },
  plugins: plugins,
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        query: {
          presets: babelPresets
        },
        exclude: /node_modules/,
        include: __dirname
      },
      {
        test: /\.scss?$/,
        loader: styleLoader,
        include: __dirname
      }
    ]
  }
}
