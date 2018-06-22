/* eslint-disable */
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import HttpService from './HttpService'

const client = new ApolloClient({
  link: new HttpLink({
    uri: '/api/graphql',
    fetch: HttpService.fetch,
  }),
  cache: new InMemoryCache(),
})

export default client
