const webpackConfig = require('./webpack.config')
const { merge } = require('webpack-merge')
const webpack = require('webpack')

module.exports = merge(webpackConfig, {
  // 开发工具，开启 source map，编译调试
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    port: '8080',
    hot: true,
    historyApiFallback: true // 解决history模式
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ],
        exclude: /node_modules/
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
})
