const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

/** @type {import('webpack').Configuration} */
module.exports = {
  mode: "development",
  devtool: "source-map",
  /** @type {import('webpack-dev-server').Configuration} */
  devServer: {
    allowedHosts: "all",
    static: {
      directory: path.join(__dirname, "public"),
    },
    hot: true,
    compress: true,
    port: 8080,
    client: { logging: "verbose", overlay: true, progress: true },
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: [/node_modules/],
        use: { loader: "babel-loader" },
      },
      {
        test: /\.css?$/,
        exclude: [/node_modules/],
        use: { loader: "style-loader" },
      },
    ],
  },
  resolve: {
    extensions: [".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
  ],
};
