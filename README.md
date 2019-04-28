# webpack4 

#### 下面的序列是按照代码得提交顺序进行排列，给有需要的人方便理解

 1:webpack默认只认识es模块和common模块
 webpack 4比3提升性能90%

2
loader: "file-loader",
options: {
name:"[name].[ext]"
}
图片具名build

3 url-loader可以通过limit:248把图片变成base64或者图片进行显示，base会展示在render，不利于首屏渲染

4 node-sass": "^4.11.0",
"sass-loader": "^7.1.0",解决对scss的支持，打包在header中的style中

5 postcss-loader增加对css3新特性的支持，编译成webpack识别的css，autoprefixer自动在代码增加浏览器厂商前缀

6 html-webpack-plugin通过template依当前开发代码为模板，打包成dist文件， title:"bigdeal",
filename:'index.html',
template:'./index.html'

7  clean-webpack-plugin 先删除代码在打包

8 mini-css-extract-plugin
检查过滤到开发环境的相应css或者scss文件，通过插件，提供的插件loader转化成webpack认识的css文件
rules: [
{
test: /\.css$/,
use: [{
loader:mincss.loader
},
'css-loader',
'postcss-loader'
]
},
配置插件，webpack中的css编译成dist目录下指定css
new mincss({
filename:'main.css',
})

9 source-map 对开发代码编译进行映射，方便快速找到bug位置，
devtool:cheap-module-eval-source-map最快的开发模式，映射第三方和开发模块错误
devtool:"eval",不进行映射，打包最小，不能查看错误

10 webpack-dev-server 解决每次编译都需要重新手动编译问题，把开发代码打包放在电脑内存当中进行处理，使速度大大提升
配置
devServer:{
contentBase:"./dist",
open:true,
port:8081
},

11 proxy
proxy:{
"/api":{
target:"http://localhost:9999"
}
}解决跨域

12 hot:true, hotOnly:true,hot启用热更新，hottrue只有检测到差异才会热更新，如果修改css，css文件也使用了mini-css-extract-plugin插件，把css编译到外部，会监听不到css变化，这时候需要特殊处理。非插件特殊处理的差异都可以监听出来

13 vue-loader,react-loader内置了对.vue和react文件变化的监听然后进行热更新的回调处理

14 webpack-loader 作用是@babel/core和webpack之间沟通桥梁
@babel/preset-env把es6转化成es5
通过@babel/polyfill增加全部es6新特性的全局注入
test: /\.js$/,
exclude:/node_modules/,
loader:"babel-loader",

通过按需加载需要解析的es6新特性
// options:{
// presets:[["@babel/preset-env",{
// useBuiltIns:"usage"
// }]]
// }

15 @babel/plugin-transform-runtime适合开发组件库网站的脚手架使用，把解析es6新特性成es5使用闭包的形式按需加载到render.js的全局当中
{
test: /\.js$/,
exclude:/node_modules/,
loader:"babel-loader",
options:{
// presets:[["@babel/preset-env",{
// useBuiltIns:"usage"
// }]]
plugins:[
[
"@babel/plugin-transform-runtime",
{
absoluteRuntime:false,
corejs:false,
helpers:true,
regenerator:true,
useESModules:false
}
]
]

}

