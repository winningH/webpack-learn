const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: "main.js"
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /.(png|jpe?g|gif)$/,
        // loader: "file-loader"
        use: {
          loader: "url-loader",
          options: {
            // name: "assets/images/[name].[ext]"
            name: "[name].[ext]",
            outputPath: "assets/images/",
            limit: 3 * 1024,  // 对小体积对资源图片进行管理，如果图片小于3Kb，以base64，减少请求数量
          }
        }
      },
      {
        test: /\.(eot|woff)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]"
          }
        }
      },
      {
        test: /.less$/,
        use: ["style-loader", "css-loader", "less-loader"]
      },
      {
        test: /\.css$/,
        loader: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/assets/html/index.html",
      filename: "index.html"
    }),
    new CleanWebpackPlugin()
  ]
}