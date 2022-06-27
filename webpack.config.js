
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: "production",
  entry: { index: path.resolve(__dirname, 'src/index.js'), },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].bundle.js',
    clean: true,
    library: 'npm-test-package',
    globalObject: 'this',
    libraryTarget: 'umd',
  },
  // resolve: {
  //   alias: {
  //     src: path.resolve(__dirname, 'src/'),
  //   },
  //   extensions: ['.js']
  // },
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
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        type: 'public',
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin(),
  ],
};
