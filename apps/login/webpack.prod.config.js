const dev = require('./webpack.config');
module.exports = Object.assign(dev, {
  optimization: {
    minimize: true
  }
})