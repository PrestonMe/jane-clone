const path = require('path')
const ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
  context: __dirname,
  entry: './js/containers/ClientApp.js',
  devtool: 'cheap-module-source-map',
  output: {
    path: path.join(__dirname, '/public'),
    publicPath: '/public/',
    // publicPath lets webpack know where to get additional bundles once you've downloaded
    // part of code-splitting
    filename: 'bundle.js'
  },
  resolve: {
    // alias: {
    //   react: 'preact-compat',
    //   'react-dom': 'preact-compat'
    // },
    extensions: ['.js', '.jsx', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: false
  },
  devServer: {
    publicPath: '/public/',
    historyApiFallback: true
  },
  module: {
    rules: [
      {enforce: "pre", test: /\.js$/,
      loader: "eslint-loader", exclude: /node_modules/},
      {test: /\.css$/, use: ['style-loader', {loader: 'css-loader',
      options: {url: false}}]},
      {test: /\.js?$/, loader: 'babel-loader', include: [
      path.resolve('js'), path.resolve('node_modules/preact-compat/src')]},
      {test: /\.scss$/, use: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: ["css-loader", "sass-loader"]
      })
    },
      {test: /\.(jpe?g|png|gif|svg)$/i,
      loaders: [
        'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
        'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
      ]}
    ]
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
  ]
}
