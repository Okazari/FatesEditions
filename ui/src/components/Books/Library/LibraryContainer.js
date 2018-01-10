//eslint-disable-next-line
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import Library from './Library'

const query = gql`
  query {
    books(draft: false) {
      id
      name
      cover
      authorId
    }
  }
`


export default graphql(query, {
  props: ({ data: { books }, ...rest }) => ({
    ...rest,
    books,
  }),
})(Library)
