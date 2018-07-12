/* eslint-disable */
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { onError } from 'apollo-link-error'
import RouteService from './RouteService'
import { InMemoryCache } from 'apollo-cache-inmemory'
import HttpService from './HttpService'

const errorMiddleware = onError(({ response, graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    const unauthorized = !!graphQLErrors.filter(({ code }) => code === 401)
    if(unauthorized) {
      RouteService.redirect401()
      response.errors = null
    }
  }
});

const client = new ApolloClient({
  link: new HttpLink({ uri: '/api/graphql' }),
  cache: new InMemoryCache(),
})

export default client
