const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CSSExtract = new MiniCssExtractPlugin({ filename: 'styles.css' });

module.exports = (env) => {
  const isProduction = env === 'production';

  return {
    entry: "./src/app.js",
    output: {
      path: path.join(__dirname, "public"),
      filename: "bundle.js"
    },
    module: {
      rules: [
        {
          loader: "babel-loader",
          test: /\.js$/,
          exclude: /node_modules/
        },
        {
          test: /\.s?css$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        }
      ]
    },
    plugins: [
      CSSExtract
    ],
    devtool: isProduction ? 'sourse-map' : "inline-source-map",
    devServer: {
      contentBase: path.join(__dirname, "public"),
      historyApiFallback: true
    }
  }
};
