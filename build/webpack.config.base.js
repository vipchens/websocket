const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

const config = {
  // target: 'web',          // 构建目标  web | node
  entry: path.join(__dirname, '../src/index.js'),
  output: {
    filename: 'index.[hash:8].js',
    path: path.join(__dirname, '../dist')
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader']
      },
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
        // include: [path.resolve('../src')],
        enforce: 'pre',
        options: {
          formatter: require('eslint-friendly-formatter') // 指定错误报告的格式规范
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: file => (
          /node_modules/.test(file) &&
          !/\.vue\.js/.test(file)
        )
      },
      {
        test: /\.less$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /\.(gif|jpg|jpeg|png|svg)$/,
        use: [
          // {
          //   loader: 'url-loader',
          //   options: {
          //     limit: 1024,
          //     name: 'resources/[path][name].[hash:8].[ext]'
          //   }
          // },
          {
            loader: 'file-loader',
            options: {
              limit: 8192,
              name: 'dist/[path][name].[hash:8].[ext]'
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      '@': path.resolve(__dirname, '../'),
    }
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new VueLoaderPlugin()
  ]
}
console.log(path.resolve(__dirname, '../'), '------------------')
module.exports = config;
