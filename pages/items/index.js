import { withRouter } from 'next/router'
import { useQuery } from '@apollo/client'

// components
import ItemBox from '../../components/ItemBox'
import { Wrapper, Loader, Text } from '../../components/Common'
import Error from '../../components/Error'

// query
import { SEARCH_QUERY } from '../../graphql/queries'

function Items({ router }) {
  const searchTerm = decodeURIComponent(router?.query?.search || '')

  const { data, loading, error } = useQuery(SEARCH_QUERY, {
    variables: { searchTerm, limit: 4 },
  })

  if (error) return <Error />
  if (loading) return <Loader />
  if (!data?.search?.results?.length)
    return (
      <Wrapper>
        <Text size="24" color="blue" padding="1rem 0" align="center">
          No se encontraron resultados con <b>{`"${searchTerm}"`}</b>
        </Text>
      </Wrapper>
    )

  return (
    <Wrapper columns={1}>
      {data?.search?.results?.map(result => (
        <ItemBox key={result.id} {...result} />
      ))}
    </Wrapper>
  )
}

export default withRouter(Items)
