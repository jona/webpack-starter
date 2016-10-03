var webpack = require('webpack');
var config = require('../webpack.config')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var compiler = webpack(config)

var Server = function Server(app) {
  app.use(webpackDevMiddleware(compiler, { 
    noInfo: true, 
    publicPath: config.output.publicPath 
  }))
  app.use(webpackHotMiddleware(compiler))
}

module.exports = Server;
