const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  target: 'node',
  mode: 'development',
  entry: './server/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'server.cjs',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.(js|ts|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader,"css-loader",'postcss-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/tailwind.css', // 出力されるCSSファイル名
    }),
  ]
};