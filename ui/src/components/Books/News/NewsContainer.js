//eslint-disable-next-line
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import News from './News'

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


export default graphql(query, {
  options: {
    pollInterval: 60 * 1000,
  },
  props: ({ data: { books } }) => ({
    books,
  }),
})(News)
