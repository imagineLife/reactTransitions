const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCss = require("mini-css-extract-plugin");
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [MiniCss.loader, "css-loader"]
      },
      //load images!!
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
        'file-loader'
        ]
      }
    ]
  },

  //for client-side react-router routing
  devServer:{
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new MiniCss({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ]
};