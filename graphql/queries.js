import { gql } from '@apollo/client'

export const SEARCH_QUERY = gql`
  query search($searchTerm: String!, $limit: Int) {
    search(searchTerm: $searchTerm, limit: $limit) {
      query
      results {
        id
        title
        condition
        thumbnail
        sellerState
        soldQuantity
        formattedPrice
        hasFreeShipping
      }
    }
  }
`

export const ITEM_QUERY = gql`
  query getItem($id: ID!) {
    item(id: $id) {
      id
      price
      title
      picture
      condition
      description
      soldQuantity
      formattedPrice
      hasFreeShipping
      pathFromRoot {
        id
        name
      }
    }
  }
`
