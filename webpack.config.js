const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  watch: true,
  mode: 'development',
  devtool: 'source-map',
  entry: './src/javascripts/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'javascripts/main.js',
  },
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env', { 'targets': '> 0.25%, not dead' }],
              ],
            }
          }
        ]
      },
      {
        test: /\.(css|sass|scss)/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: false,
            }
          },
          {
            loader: 'sass-loader',
          }
        ],
      },
      {
        test: /\.(png|jpg|jpeg)/,
        use: [
          {
            loader: 'file-loader',
            options: {
              esModule: false,
              name: 'images/[name].[ext]',
              publicPath: '/',
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65,
              }
            }
          }
        ]
      },
    ]
  },
  plugins: [
    // new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: './stylesheets/style.css',
    }),
    
    new HtmlWebpackPlugin({
      template: './src/templates/index.html',
      filename: 'index.html',
    }),
    new CleanWebpackPlugin(),
  ],
}
