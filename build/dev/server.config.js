const path = require('path');

module.exports = {
  entry: './src/server.js',
  output: {
    filename: 'server.bundle.js',
    path: path.resolve(__dirname, '..', 'dist'),
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  mode: 'development',
  target: 'node',
};
