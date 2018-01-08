//eslint-disable-next-line
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { AuthService } from 'services'
import Publish from './Publish'

const query = gql`
  query ConnectedUserBook($author: ID!) {
    book(author: $author, draft: true) {
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
  props: ({ data: { book }, ...rest }) => ({
    ...rest,
    drafts: book,
  }),
})(Publish)
