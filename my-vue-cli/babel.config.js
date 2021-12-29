{
  presets: ;;[
    [
      '@babel/preset-env',
      {
        // 浏览器版本
        targets: {
          edge: '17',
          firefox: '60',
          chrome: '67'
        },

        corejs: 3,
        // 加载情况
        // entry: 需要在入口文件进入@babel/polyfill，然后babel根据使用情况按需载入
        // usage: 无需引入，自动按需加载
        // false: 入口文件引入，全部载入
        useBuiltIns: 'usage'
      }
    ]
  ]
}