const path = require('path')
const htmlwebpackplugin = require('html-webpack-plugin')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: '[name].js'
	},
	mode: 'development',
	resolveLoader: {
		modules: ['./node_modules', './myLoaders']
	},
	module: {
		rules: [
			{
				test: /.(png|jpe?g|gif)$/,
				use: {
					loader: 'url-loader',
					options: {
						name: '[name].[ext]',
						outputPath: 'assets/images/',
						limit: 3 * 1024 //对小体积的资源图片进行管理，小图片转成base64,减少请求数量
					}
				}
			},
			{
				test: /\.(eot|woff)$/,
				use: {
					loader: 'file-loader',
					options: {
						name: '[name].[ext]'
					}
				}
			},
			{
				test: /.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /.less$/,
				use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']
			}
		]
	},
	devServer: {
		contentBase: './dist',
		open: true,
		port: 8080,
		proxy: {
			'/api': {
				target: 'http://localhost:9092'
			}
		},
		//浏览器刷新功能关闭
		hot: true,
		hotOnly: true
	},
	devtool: 'source-map',
	plugins: [
		new htmlwebpackplugin({
			template: './src/assets/html/index.html',
			filename: 'index.html'
		}),
		new CleanWebpackPlugin(),
		new webpack.HotModuleReplacementPlugin()
	]
}
