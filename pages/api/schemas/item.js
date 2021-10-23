import {
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLObjectType,
} from 'graphql/type'

import resolveDescription from '../resolvers/description'
import resolvePathFromRoot from '../resolvers/pathFromRoot'

// TODO: mover a un element de enum
const conditions = {
  new: 'Nuevo',
  used: 'Usado',
}

// TODO: move to another folder
const formatter = locale =>
  new Intl.NumberFormat(locale, {
    currency: 'USD',
    style: 'currency',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })

const PathFromRoot = new GraphQLObjectType({
  name: 'PathFromRoot',
  fields: {
    id: {
      type: GraphQLID,
    },
    name: {
      type: GraphQLString,
    },
  },
})

export default new GraphQLObjectType({
  name: 'Item',
  fields: {
    id: {
      type: GraphQLID,
    },
    title: {
      type: GraphQLString,
    },
    price: {
      type: GraphQLFloat,
    },
    condition: {
      type: GraphQLString,
      resolve: ({ condition }) => conditions[condition],
    },
    thumbnail: {
      type: GraphQLString,
    },
    picture: {
      type: GraphQLString,
      resolve: parent =>
        parent.pictures.find(({ id }) => id === parent.thumbnail_id).url,
    },
    description: {
      type: GraphQLString,
      resolve: resolveDescription,
    },
    pathFromRoot: {
      type: new GraphQLList(PathFromRoot),
      resolve: resolvePathFromRoot,
    },
    hasFreeShipping: {
      type: GraphQLBoolean,
      resolve: parent => !!parent.shipping.free_shipping,
    },
    soldQuantity: {
      type: GraphQLInt,
      resolve: parent => parent.sold_quantity,
    },
    sellerState: {
      type: GraphQLString,
      resolve: parent => parent.seller_address.state.name,
    },
    formattedPrice: {
      type: GraphQLString,
      description: 'Formatted item price based on currency id',
      resolve: parent =>
        formatter(`es-${parent.currency_id}`)
          .format(parent.price)
          .replace(/,/g, '.'),
    },
  },
})
