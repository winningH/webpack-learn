const path = require('path')

module.exports = {
  entry: './src/index.js',
  node: 'development',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.js'
  }
}
