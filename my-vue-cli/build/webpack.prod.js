const webpackConfig = require('./webpack.config')
const { merge } = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// v4 使用的是OptimizeCSSAssetsPlugin,到了webpack5官方推荐使用CssMinimizerWebpackPlugin
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

module.exports = merge(webpackConfig, {
  mode: 'production',

  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../'
            }
          },
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../'
            }
          },
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
        type: 'asset/resource'
      }
    ]
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name]_[contenthash:6].css',
      chunkFilename: '[id].css'
    })
  ],

  optimization: {
    minimizer: [
      new CssMinimizerPlugin()
    ]
  }
})
