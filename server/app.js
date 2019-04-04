const express = require('express')

const server = express()

server.use('/api', require('./routes/welcome'))

module.exports = server
