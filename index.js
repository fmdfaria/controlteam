const server = require('./src/server')

// server.listen(5000 || process.env.PORT)

server.listen(process.env.PORT || 3000)
