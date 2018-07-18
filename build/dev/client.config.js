const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    './src/client.js',
    'webpack-hot-middleware/client'
  ],
  output: {
    filename: 'client.bundle.js',
    path: path.resolve(__dirname, '..', 'dist')
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            plugins: ['react-hot-loader/babel'],
          },
        },
      },
    ],
  },
  mode: 'development',
};
