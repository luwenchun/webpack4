  const path = require('path');
  const htmlwebpackplugin= require("html-webpack-plugin")
  const clean =require("clean-webpack-plugin")
  const mincss=require("mini-css-extract-plugin")

  module.exports = {
    entry: './index.js',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist')
    },
    devServer:{
        contentBase:"./dist",
        open:true,
        port:8081,
        proxy:{
            "/api":{
                target:"http://localhost:9999"
            }
        }
    },
    module: {
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
       {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
       {
         test: /\.(png|svg|jpg|gif)$/,
         use: {
            // loader: "file-loader",
            loader: "url-loader",
            options: {
                name:"[name]_[hash].[ext]",
                 outputPath:"img11s",
                 limit:248
            },
           
        }
       }
      ]
    },
    plugins:[
        new clean(),
        new htmlwebpackplugin({
        title:"bigdeal",
        // filename:'index2.html',
        template:'./index.html'
    }),
    new mincss({
        filename:'main.css',

    })
    ],
    // devtool:"source-map",
    // devtool:"inline-source-map",
    //  devtool:"cheap-module-source-map",
    //   devtool:"eval",
     devtool:"cheap-module-eval-source-map",
    mode:"development"

 
  };