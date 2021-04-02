const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          },
        }
      }, 
      {
        test: /.(css|scss)$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.css'],
  },
  devServer: {
    // contentBase: path.resolve(__dirname, './dist'),
    compress: true,
    port: 8080,
    publicPath: '/client/',
    hot: true,
    // inline: true,
    proxy: {
      '/users': 'http://localhost:3000'
    }
  },
};