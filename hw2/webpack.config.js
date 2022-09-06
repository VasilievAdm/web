const {
  resolve
} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: './js/index.js',
  mode: 'development',
  output: {
    filename: 'main.[contenthash].js',
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [{
        test: /\.(png|jpeg|gif|svg)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        }
      },
      // {
      //   test: /\.css$/i,
      //   use: ["style-loader", "css-loader"],
      // },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, "index.html"),
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, "date.html"),
      filename: "date.html",
    }),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, "timer.html"),
      filename: "timer.html",
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    }),
    // new BundleAnalyzer()
  ],
  devServer: {
    port: 3000,
    watchFiles: ['./*']
  }
}