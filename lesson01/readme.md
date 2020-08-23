## webpack: 
 模块打包器

### webpack安装
- 项目安装
- 全局安装 
`npm install -g webpack webpack-cli`

### webpack 启动
- `npx webpack`
- 在package.json 里面的scripts定义脚步命令 `"dev": "webpack"`, 然后执行 `npm run dev`

### webpack配置
- webpack --config webpack.xxx.config.js 指定默认的配置文件
- 默认的入口：./src/index.js
- 默认的出口：输出目录./dist，输出资源的名称：main.js

### webpack核心概念
- entry: webpack执行构建的入口，默认./src/index.js
- output: 配置资源输出位置和名称，默认：./dist/main.js
- mode: 打包构建模式，有开发模式，不压缩代码，利于阅读查找排错；生产模式：代码会压缩
- chunk: 代码片段 由入口模块文件与依赖模块的内容生成
- module: 模块，webpack基于nodejs，有一切皆是模块的概念
- bundle: 打包后输出到资源目录的文件，构建成功后的输出文件
- loader: 模块转换，wbepack默认支持js模块，json模块，像css模块，图片模块都不支持
- plugin: webpack的功能扩展

### MPA SPA
- MPA：多页面应用, 有多个页面，对应多个入口
- SPA：单页面应用