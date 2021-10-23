import {
  GraphQLID,
  GraphQLInt,
  GraphQLString,
  GraphQLNonNull,
  GraphQLObjectType,
} from 'graphql/type'

// schemas
import Item from './item'
import Search from './search'

// resolvers
import resolveItem from '../resolvers/item'
import resolveSearch from '../resolvers/search'

export const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    item: {
      type: Item,
      resolve: resolveItem,
      args: {
        id: {
          type: GraphQLNonNull(GraphQLID),
        },
      },
    },
    search: {
      type: Search,
      resolve: resolveSearch,
      args: {
        searchTerm: {
          type: GraphQLNonNull(GraphQLString),
        },
        limit: {
          type: GraphQLInt,
          defaultValue: 4,
        },
      },
    },
  },
})

export const Mutation = null
