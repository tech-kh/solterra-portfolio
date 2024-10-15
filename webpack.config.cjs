const path = require('path');

module.exports = {
  target: 'node',
  mode: 'development',
  entry: './server/index.js', 
  output: {
    path: __dirname + '/dist',
    filename: 'server.js',
  }
};