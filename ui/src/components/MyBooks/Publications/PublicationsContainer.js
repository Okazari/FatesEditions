//eslint-disable-next-line
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { AuthService } from 'services'
import Publications from './Publications'

const query = gql`
  query ConnectedUserBook($author: ID!) {
    books(author: $author, draft: false) {
      id
      name
      cover
      authorId
    }
  }
`


export default graphql(query, {
  options: () => ({
    variables: {
      author: AuthService.getConnectedUserId(),
    },
  }),
  props: ({ data: { books }, ...rest }) => ({
    ...rest,
    books,
  }),
})(Publications)
