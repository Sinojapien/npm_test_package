
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "production",
  entry: { index: path.resolve(__dirname, 'dev/index.js'), },
  output: {
    path: path.resolve(__dirname, 'dev/output'),
    filename: '[name].bundle.js',
    clean: true,
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src/'),
    },
    extensions: ['.js']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(css|scss)$/i,
        use: [
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      // {
      //   test: /\.(png|svg|jpg|jpeg|gif)$/,
      //   type: 'public',
      // },
    ]
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
    new MiniCssExtractPlugin(),
  ],
};
