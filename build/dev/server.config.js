const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'server.bundle.js',
    path: path.resolve(__dirname, '..', 'dist')
  },
  module: {
    rules: []
  },
  mode: 'development',
};
