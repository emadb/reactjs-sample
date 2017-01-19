const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    app: [path.resolve(__dirname, 'src/app/App.jsx')],
    vendors: require('./vendor-lib')
  },
  output: {
      filename: '/js/app.js',
      path: __dirname + "/dist"
  },
  plugins: [
    new ExtractTextPlugin('app.css', {allChunks: true}),
    new webpack.optimize.UglifyJsPlugin({minimize: true}),
    new webpack.optimize.CommonsChunkPlugin('vendors', 'js/vendors.js'), 
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html', 
      css: 'app.css',
      template: path.resolve(__dirname, 'src/index.ejs'),
      inject: false
    })
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: path.resolve(__dirname, 'src'),
    alias:{
      'settings': 'environments/prod'
    }
  },
  eslint: {
      configFile: 'eslint.config.json'
  },
  module: {
    preLoaders: [
        {
          test: /\.jsx?$/,
          loaders: ['eslint'],
          include:  path.resolve(__dirname, 'src')
        }
    ],
    loaders: [
      { test: /\.html$/, loaders: ["file?name=[name].[ext]"] },
      { test: /\.jsx?$/, loaders: ['babel'], include: path.join(__dirname, 'src') },
      { test: /\.scss$/, loader: ExtractTextPlugin.extract('style', 'css!sass') },
      { test: /\.css$/, loader: 'style!css?root=../' },
      { test: /\.(woff|woff2|eot|otf|svg|ttf)$/, loader: 'url?limit=10000000'},
      { test: /\.png$/, loaders: ['file'] }
    ]
  }
};
