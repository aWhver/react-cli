const path = require('path');

const baseConfig = {
  entry: {
    main: '../index.js', // path.resolve(path.__dirname(), '')
  },
  devServer: {
    open: true,
    openPage: '../src/index.html'
  }
}

module.exports = baseConfig;
