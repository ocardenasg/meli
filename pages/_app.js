import Head from 'next/head'
import { ApolloProvider } from '@apollo/client'
import client from '../apollo-client'

// common components
import Header from '../components/Header'

import '../styles/font-family.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Head>
        <title>Mercado Libre Challenge</title>
        <meta name="description" content="Mercado Libre Challenge" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Header />
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
