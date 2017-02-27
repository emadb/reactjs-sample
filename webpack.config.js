const path = require('path')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    devtool: '#inline-source-map',
    entry: {
      app:[
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/dev-server',
        path.resolve(__dirname, 'src/app/App.jsx')
      ],
      vendors: require('./vendor-lib')
    },
   
    output: {
        filename: '/js/app.js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
      extensions: ['', '.js', '.jsx'],
      root: path.resolve(__dirname, 'src'),
      alias:{
        'settings': 'environments/dev'
      }
    },
    eslint: {
      configFile: 'eslint.config.json'
    },
    plugins: [
      new webpack.optimize.CommonsChunkPlugin('vendors', 'js/vendors.js'),  
      new webpack.NoErrorsPlugin(),
      //new webpack.ProvidePlugin({$: "jquery"}),
      //new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /it|en/),
      new HtmlWebpackPlugin({
        filename: 'index.html', 
        css: '',
        template: path.resolve(__dirname, 'src/index.ejs'),
        inject: false
      })
    ],
    module: {
      preLoaders: [
        {
          test: /\.jsx?$/,
          loaders: ['eslint'],
          include:  path.resolve(__dirname, 'src')
        }
      ],
      loaders: [
        {test: /\.html$/, loaders: ['file?name=[name].[ext]']},
        {test: /\.css$/, loader: 'style!css?sourceMap'},
        {test: /\.jsx?$/, loader: 'babel', exclude: /node_modules/},
        {test: /\.scss$/, loaders: ["style", "css?sourceMap=true&root=../", "sass?sourceMap=true&root=../"]},
        {test: /\.json$/, loader: 'json-loader'},
        {test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
        {test: /\.otf?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
        {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
        {test: /\.eot(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file" },
        {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" },
        {test: /\.(png|jpg|jpeg|gif|woff)$/, loader: "url?limit=10000" }]
    }
};
