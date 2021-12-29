const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// 把不需要打包的静态文件放在public文件夹，这个地方不会被打包到dist，所以用这个插件把public的文件复制过去
// const CopyWebpackPlugin = require('copy-webpack-plugin')

const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  entry: path.resolve(__dirname, '../src/main.js'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name]_[connecthash:8].js',
    assetModuleFilename: 'assets/[name][ext]',
    clean: true,
    publicPath: process.env.NODE_ENV === 'development' ? '/' : '/prodVue/'
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
        type: 'asset/resource'
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/public/index.html'),
      filename: 'index.html',
      minify: {
        removeComments: true, // 移除html中的注释
        collapseWhitespace: true, // 删除空白符与换行符
        minifyCSS: true // 压碎内联css
      },
      inject: true
    }),

    // new CopyWebpackPlugin({
    //   patterns: [
    //     {
    //       from: path.resolve(__dirname, '../src/static'),
    //       to: path.resolve(__dirname, '../dist')
    //     }
    //   ]
    // }),

    new VueLoaderPlugin()
  ],

  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src')
    },
    extensions: ['.vue', '.js', '.json']
  }
}
