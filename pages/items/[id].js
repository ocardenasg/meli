import { Fragment, useEffect } from 'react'
import { withRouter } from 'next/router'
import { useLazyQuery } from '@apollo/client'
import Image from 'next/image'

// components
import {
  ArrowRight,
  Button,
  Container,
  Loader,
  Text,
  Wrapper,
} from '../../components/Common'
import Error from '../../components/Error'

// query
import { ITEM_QUERY } from '../../graphql/queries'

const Item = ({ router }) => {
  const [getItem, { loading, data, error }] = useLazyQuery(ITEM_QUERY)

  useEffect(() => {
    if (router.isReady) {
      getItem({
        variables: {
          id: router.query.id,
        },
      })
    }
  }, [router])

  if (error) return <Error />

  if (loading || !router.isReady || !data) return <Loader />

  return (
    <>
      <Wrapper bg="lighter">
        <Text size="14" color="gray">
          {data.item.pathFromRoot.map(({ id, name }, index, paths) => {
            if (index === paths.length - 1) {
              return (
                <span key={id}>
                  <b>{name}</b>
                </span>
              )
            }

            return (
              <Fragment key={id}>
                <span>{name}</span>
                <ArrowRight />
              </Fragment>
            )
          })}
        </Text>
      </Wrapper>
      <Wrapper columns={10}>
        <Container start={1} end={8} height="680px" width="680px" margin="1rem">
          <Image
            layout="fill"
            quality={100}
            objectFit="contain"
            alt={data.item.title}
            src={data.item.picture}
          />
        </Container>
        <Container start={8} end={11} margin="2rem 2rem 0 0">
          <Text size="14">
            {data.item.condition} - {data.item.soldQuantity} Vendidos
          </Text>
          <Text size="24" weight={600} margin="1rem 0 0">
            {data.item.title}
          </Text>
          <Text size="46" margin="2rem 0">
            {data.item.formattedPrice}
          </Text>
          <Button>Comprar</Button>
        </Container>
        <Container start={1} end={8} margin="2rem">
          <Text size="28">Descripción del producto</Text>
          <Text size="16" margin="2rem 0" align="justify" color="gray">
            {data.item.description || data.item.title}
          </Text>
        </Container>
      </Wrapper>
    </>
  )
}

export default withRouter(Item)
