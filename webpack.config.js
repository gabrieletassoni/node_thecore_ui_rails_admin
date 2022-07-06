const path = require('path');

module.exports = {
  entry: './src/index.js',
  resolve: {
    alias: {
        jquery: "jquery/src/jquery",
        $: 'jquery/src/jquery',
        jQuery: 'jquery/src/jquery'
    }
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'production'
};