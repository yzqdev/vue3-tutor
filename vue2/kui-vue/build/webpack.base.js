const webpack = require('webpack')
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const pkg = require('../package.json');
const MiniCssExtractPlugin = require('mini-css-extract-plugin') //for webpack 4

const mdRender = require('./md-loader/render')
const devMode = global.env.goal === 'dev'

const vueLoaderOptions = {
  loaders: {
    css: ['vue-style-loader', 'css-loader'],
    less: ['vue-style-loader', 'css-loader', 'less-loader'],
    js: [
      {
        loader: 'babel-loader',
        options: {
          presets: ['env'],
          plugins: ['transform-vue-jsx', 'transform-object-rest-spread', 'lodash'],
        },
      },
    ],
  },
};
/**
 *
 * @type   {import('webpack').Configuration}
 */
module.exports = {
  bail: true,
  module: {
    rules: [
      {
        test: /\.md$/,
        use: [
          { loader: 'vue-loader', options: vueLoaderOptions },
          { loader: './build/md-loader', options: mdRender },
          { loader: 'kui-loader', options: { prefix: false } }
        ]
      },
      {
        test: /\.vue$/,
        use: [{
          loader: 'vue-loader',
          options: vueLoaderOptions
        },
        {
          loader: './build/kui-loader',
          options: { prefix: false }
        }]
      },
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader'],
      },
      {
        test: /\.less$/,
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          'css-loader',
          // 'postcss-loader',
          'less-loader'
        ],
      },
      {
        test: /\.j(s|sx)$/, exclude: /node_modules/, loader: 'babel-loader',
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: { limit: 8192, name: 'img/[name].[ext]?[hash:7]', esModule: false }
      },
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx', '.vue', '.json', '.less', '.md'],
    alias: {
      'vue': 'vue/dist/vue.esm.js',
      '@': path.resolve(__dirname, '../'),
      'kui-vue': path.resolve(__dirname, '../'),
      'md-loader': path.resolve(__dirname, './build/md-loader'),
    },
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.BannerPlugin(`${pkg.name} v${pkg.version} 
Copyright 2017-present, kui-vue.
All rights reserved.
Author: chuchur@qq.com / www.chuchur.com`),
    new webpack.ContextReplacementPlugin(
      /moment[\\\/]locale$/,
      /^\.\/(zh-cn)$/
    ),
  ],
}
