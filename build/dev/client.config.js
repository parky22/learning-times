const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'client.bundle.js',
    path: path.resolve(__dirname, '..', 'dist')
  },
  module: {
    rules: []
  },
  mode: 'development',
};
