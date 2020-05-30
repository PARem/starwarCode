const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: "development",
  module: {
    rules: [
      // loading images
      {
        test:/\.(png|img|jpg|jpeg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "image",
              name: "[name]-[sha1:hash:7].[ext]"
            }
          }
        ]
      },
      // loading fonts
      {
        test: /\.(ttf|otf|eot|woff|woff2)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "fonts"
            }
          }
        ]
      },
      // loading js
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: [ "babel-loader" ]
      },
      // loading css
      {
        test: /\.(css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader"
        ]
      },
      // loading sass
      {
        test: /\.(s[ac]ss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",

    }),
    new MiniCssExtractPlugin({
      filename: 'main-[hash:8].css'
    })
  ],
  devServer: {
    open: true
  }
};