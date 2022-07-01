import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import GlobalStyles from './styles'
import Pages from './pages'

const client = new ApolloClient({
  uri: 'https://catstronauts-server-w89yx8.herokuapp.com/',
  cache: new InMemoryCache(),
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <GlobalStyles />
    <Pages />
  </ApolloProvider>,
  document.getElementById('root')
)
