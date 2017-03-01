const path = require('path')

module.exports = {
  context: __dirname,
  entry: './js/ClientApp.js',
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
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "eslint-loader",
        exclude: /node_modules/
      },
      {
        // update to use sass
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: false
            }
          }
        ]
      },
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        include: [
          path.resolve('js'),
          path.resolve('node_modules/preact-compat/src')
        ]
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  }
}
