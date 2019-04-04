const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const ExtractPlugin = require('extract-text-webpack-plugin');
const baseConfig = require('./webpack.config.base');

const isDev = process.env.NODE_ENV === 'development';

module.exports = merge(baseConfig, {
  mode: 'production',
  entry: {
    app: path.join(__dirname, '../src/index.js'),
    vendor: ['vue']
  },
  output: {
    filename: '[name].[chunkhash:8].js'
  },
  module: {
    rules: [
      {
        test: /\.styl/,
        use: ExtractPlugin.extract({
          fallback: 'vue-style-loader',
          use: [
            'css-loader',
            'styles-loader'
          ]
        })
      }
    ]
  },
  plugins: [
    new ExtractPlugin('styles.[contentHash:8].css')
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'vendor'
    // }),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'runtime'
    // })
  ]
})
