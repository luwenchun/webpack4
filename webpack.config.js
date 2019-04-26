  const path = require('path');
  const htmlwebpackplugin= require("html-webpack-plugin")

  module.exports = {
    entry: './index.js',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist')
    },
    module: {
      rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
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
    plugins:[new htmlwebpackplugin({
        title:"bigdeal",
        filename:'index.html',
        template:'./index.html'
    })]
 
  };