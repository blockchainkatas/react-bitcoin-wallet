const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const cssModules = 'modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]'

module.exports = {
  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  entry: ['./src/index.jsx'],
  output: {
    filename: 'app.js',
    path: './build',
    publicPath: '/'
  },

  module: {
    loaders: [
      { test: /\.json$/, loader: "json-loader" },
      { test: /\.(js|jsx)$/, exclude: /node_modules/, loaders: ['babel'] },
      { test: /\.css$/, loader: `style-loader!css-loader?${cssModules}` }
    ]
  },

  devServer: {
    host: '0.0.0.0',
    port: 8080,
    inline: true
  },

  plugins: [
    new HtmlWebpackPlugin({ template: './src/assets/index.html' }),
    new ExtractTextPlugin('style.css', { allChunks: true })
  ],

  node: {
    fs: "empty",
    net: "empty",
    tls: "empty"
  }
}
