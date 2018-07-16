import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import Library from './Library'

const query = gql`
  query {
    books(draft: false) {
      id
      name
      cover
      author {
        id
        username
      }
    }
  }
`

const queryOptions = {
  options: {
    pollInterval: 60 * 1000,
    fetchPolicy: 'cache-and-network',
  },
  props: ({ data: { books } }) => ({
    books,
  }),
}

export default graphql(query, queryOptions)(Library)
