//eslint-disable-next-line
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import DraftGeneral from './DraftGeneral'

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
      }
      stats {
        id
        initValue
      }
    }
  }
`


export default graphql(query, {
  options: ({ params }) => ({
    variables: {
      id: params.draftId,
    },
  }),
  props: ({ data: { book }, ...rest }) => ({
    ...rest,
    draft: book && book[0],
  }),
})(DraftGeneral)
