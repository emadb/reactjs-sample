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
        //'font-awesome-sass-loader',
        path.resolve(__dirname, 'src/app/App.jsx')
      ],
      vendors: require('./vendor-lib')
    },
   
    output: {
        filename: '/js/app.js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [
          path.join(__dirname, "src"),
          "node_modules"
      ],
      alias:{
        'settings': 'environments/dev'
      }
    },
    // eslint: {
    //   configFile: 'eslint.config.json'
    // },
    plugins: [
      new webpack.optimize.CommonsChunkPlugin({name:'vendors', filename:'js/vendors.js'}),  
      //new webpack.NoErrorsPlugin(),
      //new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /it|en/),
      new HtmlWebpackPlugin({
        filename: 'index.html', 
        css: '',
        template: path.resolve(__dirname, 'src/index.ejs'),
        inject: false
      })
    ],
    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: [{loader: 'eslint-loader',options: {configFile: 'eslint.config.json'}}],
          include:  path.resolve(__dirname, 'src'),
          
        },
        {test: /\.html$/, loader: 'file?name=[name].[ext]'},
        {test: /\.css$/, use: ['style','css?sourceMap']},
        {test: /\.jsx?$/, use: ['babel-loader'], exclude: /node_modules/},
        {test: /\.scss$/, use: ["style", "css?sourceMap=true&root=../", "sass?sourceMap=true&root=../"]},
        {test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, use: [{loader: "url-loader?limit=10000&mimetype=application/font-woff" }]},
        {test: /\.otf?$/, use: [{loader: "url?limit=10000&mimetype=application/octet-stream" }]},
        {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, use: [{loader: "url?limit=10000&mimetype=application/octet-stream" }]},
        {test: /\.eot(\?v=[0-9]\.[0-9]\.[0-9])?$/, use: [{loader: "file" }]},
        {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, use: [{loader: "url?limit=10000&mimetype=image/svg+xml" }]},
        {test: /\.(png|jpg|jpeg|gif|woff)$/, use: [{loader: "url?limit=10000" }]}
      ]
    }
};
