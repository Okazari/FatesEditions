//eslint-disable-next-line
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { AuthService } from 'services'
import Library from './Library'

const query = gql`
  query {
    book(draft: false) {
      id
      name
      cover
      authorId
    }
  }
`


export default graphql(query, {
  props: ({ data: { book }, ...rest }) => ({
    ...rest,
    books: book,
  }),
})(Library)
