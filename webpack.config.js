const path = require('path');

let WebpackZipPlugin =require('webpack-zip-plugin')

new WebpackZipPlugin({
    initialFile: './dist',
    endPath: './', 
    zipName: 'webpackdemo.zip'
});

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
plugins:[new WebpackZipPlugin()]
};
