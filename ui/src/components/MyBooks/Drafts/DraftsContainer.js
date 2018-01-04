//eslint-disable-next-line
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { AuthService } from 'services'
import Drafts from './Drafts'

const query = gql`
  query ConnectedUserBook($author: ID!) {
    book(author: $author){
      ...drafts_book
    }
  }

  ${Drafts.getFragments('drafts')}
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
