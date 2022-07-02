import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import GlobalStyles from './styles'
import Pages from './pages'

const client = new ApolloClient({
  uri:
    process.env.NODE_ENV === 'production'
      ? 'https://catstronauts-server-w89yx8.herokuapp.com/'
      : 'http://localhost:4000/',
  cache: new InMemoryCache(),
  name: 'web',
  version: '1.0',
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <GlobalStyles />
    <Pages />
  </ApolloProvider>,
  document.getElementById('root')
)
