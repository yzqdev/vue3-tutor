/**
 * by chuchur /chuchur@qq.com
 * 打包vue 组件
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

/**
 *
 * @type   {import('webpack').Configuration}
 */
module.exports = {
  mode: 'development',
  devServer: {
      static: {
        directory: path.resolve(__dirname, '../docs'),
      },

    port: 7005,
    host: 'localhost',
    hot: true,

  },
  entry: {
    index: ['./src/main.js'],
    vendors: ['vue', 'vue-router']
  },
  output: {
    path: path.resolve(__dirname, '../docs'),
    filename: 'js/[name].[hash:5].js',
    publicPath: '/',
    chunkFilename: 'js/[name].[chunkhash:5].js',
  },
  performance: {
    hints: false,
  },
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development'),
      }
    }),
    new HtmlWebpackPlugin({
      favicon: './public/favicon.png',
      filename: 'index.html',
      template: './public/index.html',
      chunks: ['vendors', 'index'],
      inject: true,
    }),
  ]
}
