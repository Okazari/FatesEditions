//eslint-disable-next-line
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { AuthService } from 'services'
import Drafts from './Drafts'

const query = gql`
  query ConnectedUserBook ($author: ID!) {
    books(draft: true, author: $author) {
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
    drafts: books,
  }),
})(Drafts)
