// webpack的配置文件
const path = require("path")
const htmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const miniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  // entry: 入口
  // entry: "./src/index.js",
  entry: {
    // 多个入口需对应多出口
    index: './src/index.js',
    login: './src/login.js'
  },
  // output: 出口
  output: {
    // 指定输入资源的存在目录，位置
    // 必须是绝对路径
    path: path.resolve(__dirname, './build'),
    // filename: 'main.js'
    filename: "[name].js"
  },
  // mode: 构建环境
  mode: "development",
  module: {
    rules: [
      {
        // loader 执行顺序：自后往前，从右到左，从下到上
        test: /\.css$/,
        // use: "css-loader"
        // use: ["style-loader", "css-loader"]
        use: [miniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.less$/,
        // use: ["style-loader", "css-loader", "less-loader"]
        use: [miniCssExtractPlugin.loader, "css-loader", "less-loader"]
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: './src/index.html',
      filename: 'html/index.html'
    }),
    new CleanWebpackPlugin(),
    // 把样式抽离成独立的文件
    new miniCssExtractPlugin({
      filename: 'css/index.css'
    })
  ]
}
