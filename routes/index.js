const routes = async (fastify, options) => {
  const database = fastify.mongo.db('db')
  const collection = database.collection('test')

  fastify.get('/', async (req, rep) => {
    return { text: 'Hello!' }
  })

  fastify.get('/search/:id', async (req, rep) => {
    const result = await collection.findOne({ id: req.params.id })
    if (result.value === null) {
      throw new Error('Invalid value')
    }
    return result.value
  })

}

module.exports = routes
