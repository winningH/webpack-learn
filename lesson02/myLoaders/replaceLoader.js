// loader -> 拿到一个模块到内容 -> 对内容进行处理 -> 传递给下一个loader
// loader 普通的函数 但是不可以是箭头函数
// loader 一定要有返回值，可以通过this.callback()
// loader中有异步代码如何处理
// 多个自定义loader 如何处理 顺序

// 如何配置loader 如何接收配置参数

module.exports = function (source) {
  // this.query 接收 optiosn配置的值
  // console.log(this.query)
  // return source.replace("webpack", this.query.name)

  // const result = source.replace("webpack", 'webpack-loader')
  // this.callback(null, result)

  // 异步
  // const callback = this.async()
  // setTimeout(() => {
  //   const res =  source.replace("webpack", 'webpack-loader')
  //   callback(null, res)
  // }, 2000);

  return source.replace("hello", "你好")
}