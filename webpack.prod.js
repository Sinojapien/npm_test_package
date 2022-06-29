
const path = require('path');

const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: "production",
  entry: { index: path.resolve(__dirname, 'src/index.js'), },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].bundle.js',
    library: 'npm-test-package',
    libraryExport: 'default',
    globalObject: 'this',
    libraryTarget: 'umd',
  },
  externals: {
    // Don't bundle react or react-dom
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: 'React',
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'react-dom',
      root: 'ReactDOM',
    },
  },
});
