const path = require('path');

module.exports = {
  target: 'node',
  mode: 'development',
  entry: './server/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'server.js',
    chunkFormat: 'module'
  },
  experiments: {
    outputModule: true,
  },
  module: {
    rules: [
      {
        test: /\.(js | ts | jsx | tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};