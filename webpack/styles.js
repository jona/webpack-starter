var Styles = function Styles(extractTextPlugin) {
  var extractTextLoaders = ['css-loader?minimize', 'sass-loader'];

  // return loader
  return extractTextPlugin.extract(
    'style-loader', 
    extractTextLoaders.join('!')
  );
}

module.exports = Styles;
