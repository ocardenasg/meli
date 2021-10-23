import { GraphQLList, GraphQLObjectType, GraphQLString } from 'graphql'

import Item from './item'

export default new GraphQLObjectType({
  name: 'Search',
  fields: {
    results: {
      type: new GraphQLList(Item),
    },
    query: {
      type: GraphQLString,
    },
  },
})
