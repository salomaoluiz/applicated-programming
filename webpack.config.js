const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './static/index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index.bundle.js',
    publicPath: '/',
  },
  devServer: {
    port: 4000,
    watchContentBase: true,
    historyApiFallback: true,
  },
  resolve: {
    alias: {
      '@screens': path.resolve(__dirname, 'src', 'screens'),
      '@components': path.resolve(__dirname, 'src', 'components'),
      '@containers': path.resolve(__dirname, 'src', 'containers'),
      '@routes': path.resolve(__dirname, 'src', 'routes'),
      '@locale': path.resolve(__dirname, 'src', 'locale'),
      '@store': path.resolve(__dirname, 'src', 'store'),
      '@assets': path.resolve(__dirname, 'src', 'assets'),
      '@src': path.resolve(__dirname, 'src'),
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({ template: './static/index.html' }),
    new MiniCssExtractPlugin(),
  ],
};
