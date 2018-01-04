//eslint-disable-next-line
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { AuthService } from 'services'
import Drafts from './Drafts'

const query = gql`
  fragment toto on Root {
    book(author: $author){
      id
      name
      cover
      authorId
    }
  }

  query ConnectedUserBook($author: ID!) {
    ...toto
    __typename
  }
`


export default graphql(query, {
  options: () => {
    return {
      variables: {
        author: AuthService.getConnectedUserId(),
      },
    }
  },
})(Drafts)
