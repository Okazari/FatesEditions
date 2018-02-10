import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { AuthService } from 'services'
import MyBooks from './MyBooks'

const query = gql`
  query AuthorById ($id: ID!) {
    author(id: $id) {
      id
      drafts {
        id
        name
        cover
        startingPageId
        author {
          id
          username
        }
      }
      publications {
        id
        name
        cover
        author {
          id
          username
        }
      }
    }
  }
`

const queryOptions = {
  options: ({ params: { draftId, pageId } }) => ({
    variables: {
      id: AuthService.getConnectedUserId(),
    },
  }),
  props: ({ data: { loading, author } }) => ({
    author,
    loading,
  }),
}

export default graphql(query, queryOptions)(MyBooks)
