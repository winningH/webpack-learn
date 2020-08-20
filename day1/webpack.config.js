// webpack的配置文件
const path = require("path")
module.exports = {
  // entry 入口
  entry: "./src/index.js",
  // output: 出口
  output: {
    // 指定输入资源的存在目录，位置
    // 必须是绝对路径
    path: path.resolve(__dirname, './build'),
    filename: 'main.js'
  },
  mode: "development"
}