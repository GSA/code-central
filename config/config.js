let config

switch (process.env.NODE_ENV) {
  case 'production':
    config = require('./production')
    break
  case 'test':
    config = require('./test')
    break
  default:
    config = require('./development')
    break
}

module.exports = config
