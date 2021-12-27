const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  },
  mode: 'development',

  modules: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      option: {
        template: './src/public/index.html',
        filename: 'index.html'
      }
    }),

    new MiniCssExtractPlugin({
      filename: 'css/index.css'
    }),

    new CleanWebpackPlugin(),
  ],

  devServer: {
    port: '8080',
    open: true,
    hot: true
  }
}