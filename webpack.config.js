  const path = require('path');

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
          'css-loader'
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
    }
  };