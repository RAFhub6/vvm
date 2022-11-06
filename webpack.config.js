const path = require('path');

module.exports = {
 mode: 'development',
 entry: {
   index: './script.js',
   vm: './vm/vm.js',
 },
  output: {
   filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};