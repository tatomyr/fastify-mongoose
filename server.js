const fastify = require('fastify')()
const dbConnector = require('./db-connector')
const routes = require('./routes')

fastify.register(dbConnector, {
  url: 'mongodb://localhost:27017/',
})

fastify.register(routes)

const start = async () => {
  try {
    await fastify.listen(3000 || process.env.port)
    console.log(`server listening on port ${fastify.server.address().port}`)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

start()
