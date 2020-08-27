class TextWebpackPlugin {
  constructor(options) {
    console.log(options)
  }

  apply(complier) {
    complier.hooks.emit.tapAsync('TextWebpackPlugin', (compilation, cb) => {
      // 修改资源目录
      console.log(compilation.assets)

      let length = Object.keys(compilation.assets).length
      let content = `一共有${length}个文件，文件名称：`

      for (let filename in compilation.assets) {
        console.log(filename)
        content += `\n ${filename}`
      }
      compilation.assets['my.txt'] = {
        source: function () {
          return content
        },
        size: function () {
          return 1024
        }
      }
      cb()
    })

    // 同步
    /* complier.hooks.compile.tap('TextWebpackPlugin', compilation => {
      console.log(compilation.assets)
    }) */
  }
}

module.exports = TextWebpackPlugin
