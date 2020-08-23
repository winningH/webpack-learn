module.exports = function (source) {
  // this.query 接收 optiosn配置的值
  // console.log(this.query)
  // return source.replace("webpack", this.query.name)

  // const result = source.replace("webpack", 'webpack-loader')
  // this.callback(null, result)

  // 异步
  const callback = this.async()
  setTimeout(() => {
    const res = source.replace("webpack", 'webpack-loader')
    callback(null, res)
  }, 2000);
}
