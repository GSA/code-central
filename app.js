const express = require('express')
const config = require('./config/config')

const app = express()

app.get('/', (req, res) => {
  res.send('')
})

let server = app.listen(config.port, () => {
  console.log(`Listening on port ${server.address().port} (environment: ${config.env})`)
})

module.exports = app
