// Entry points can be changed to follow your projects file structure
var entry = [
  './src/js/app.js',
  './src/sass/main.scss'
];

// Webpack-hot-middleware only used when in development
if(process.env.NODE_ENV === 'development') {
  entry.push('webpack-hot-middleware/client');
}

module.exports = entry;
