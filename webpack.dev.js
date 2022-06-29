
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: "development",
  entry: { index: path.resolve(__dirname, 'dev/index.js'), },
  output: {
    path: path.resolve(__dirname, 'dev/output'),
    filename: '[name].bundle.js',
  },
  devServer: {
    host: '0.0.0.0',
    port: 9000,
    // watchContentBase: true,
    // open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
    // contentBase: path.join(__dirname, 'dev/output'),
    static: {
      directory: path.join(__dirname, 'dev/output'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Npm Package Test App',
      filename: 'index.html',
      template: './dev/template.html',
    }),
  ],
});
