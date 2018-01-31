import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import WriteDraft from './WriteDraft'

const query = gql`
  query BookById ($id: ID!) {
    book(id: $id) {
      id
      name
      cover
      authorId
      genreId
      synopsis
      startingPageId
      pages {
        id
        title
        description
      }
      objects {
        id
        name
        description
        atStart
        visible
      }
      stats {
        id
        name
        description
        visible
        initValue
        min
        max
      }
    }
  }
`

const queryOptions = {
  options: ({ params }) => ({
    variables: {
      id: params.draftId,
    },
  }),
  props: ({ data: { loading, book }, ...rest }) => ({
    ...rest,
    book,
    loading,
  }),
}

export default graphql(query, queryOptions)(WriteDraft)
