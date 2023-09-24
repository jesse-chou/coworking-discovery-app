const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    src: "./client/index.js"
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ]
          }
        }
      },
      {
        test: /\.s?css/,
        use: ['style-loader','css-loader', 'sass-loader']
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development', 
      template: 'index.html'
    })
  ],
  devServer: {
    static: {
      publicPath: '/build',
      directory: path.resolve(__dirname, 'build')
    },
    proxy: {
      '/api': 'http://localhost:3000'
    }
  },
}