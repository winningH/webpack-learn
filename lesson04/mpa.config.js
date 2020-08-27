const path = require('path')
const htmlwebpackplugin = require('html-webpack-plugin')
const glob = require('glob')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const setMPA = () => {
  const entry = {}
  const htmlwebpackplugins = []

  const entryFiles = glob.sync(path.resolve(__dirname, './src/*/index.js'))
  entryFiles.map((item, index) => {
    const entryFile = item
    const match = entryFile.match(/src\/(.*)\/index\.js$/)
    const pageName = match && match[1]
    console.log(pageName)

    entry[pageName] = entryFile

    htmlwebpackplugins.push(
      new htmlwebpackplugin({
        template: path.join(__dirname, `./src/${pageName}/index.html`),
        filename: `${pageName}.html`,
        chunks: [pageName]
      })
    )
  })

  //   console.log(entryFiles);
  return {
    entry,
    htmlwebpackplugins
  }
}

const { entry, htmlwebpackplugins } = setMPA()

module.exports = {
  entry,
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js'
  },
  mode: 'development',
  plugins: [...htmlwebpackplugins, new CleanWebpackPlugin()]
}
