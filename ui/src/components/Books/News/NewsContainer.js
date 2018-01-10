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
      authorId
    }
  }
`


export default graphql(query, {
  props: ({ data: { books }, ...rest }) => ({
    ...rest,
    books,
  }),
})(News)
