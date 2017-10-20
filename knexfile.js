const config = require('./config/config')

module.exports = {
  client: 'pg',
  connection: config.databaseUrl
}
