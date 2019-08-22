'use strict';
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    index: './src/index.js',
    search: './src/search.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  /* 
    style-loader和css-loader的执行顺序是从右到左的，所以要把css-loader写在style-loader右边
    是其先执行css-loader
  */
  module: {
    rules: [
      { 
        test: /.js$/, 
        use: 'babel-loader' 
      },
      {
        test: /.css$/,
        use:[
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /.(png|jpg|gif|jpeg)$/,
        use: 'file-loader'
      } 
    ]
  },
  mode: 'development',
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: './dist',
    hot: true 
  }
}