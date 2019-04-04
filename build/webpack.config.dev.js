const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');

const config = merge(baseConfig, {
  mode: 'development',
  module: {
    rules: [
      
    ]
  },
  devServer: {
    historyApiFallback: true, // 404的页面会自动跳转到/页面
    inline: true, // 文件改变自动刷新页面
    progress: true, // 显示编译进度
    // color: true, // 使用颜色输出
    port: 3000, // 服务器端口
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
});

module.exports = config;