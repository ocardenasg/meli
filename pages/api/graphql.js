import { ApolloServer } from 'apollo-server-micro'
import { GraphQLSchema } from 'graphql/type'

// schemas
import { Query } from './schemas'

export const config = {
  api: { bodyParser: false },
}

const apolloServer = new ApolloServer({
  schema: new GraphQLSchema({
    query: Query,
  }),
})
const startServer = apolloServer.start()

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  res.setHeader(
    'Access-Control-Allow-Origin',
    'https://studio.apollographql.com'
  )
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  if (req.method === 'OPTIONS') {
    res.end()
    return false
  }

  await startServer
  await apolloServer.createHandler({ path: '/api/graphql' })(req, res)

  return true
}
