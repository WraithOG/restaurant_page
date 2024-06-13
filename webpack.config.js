const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/scripts/index.js',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {

    rules: [

      {

        test: /\.css$/i,

        use: ['style-loader', 'css-loader'],

      },
      {

        test: /\.(png|svg|jpg|jpeg|gif)$/i,

        type: 'asset/resource',

      },
    ],

  },
  plugins: [new HtmlWebpackPlugin({
    template: "src/index.html",

  })],
  devServer: {
    static: {directory: './dist'},
    port: 9000,
  },
  optimization: {

    runtimeChunk: 'single',

  },
};