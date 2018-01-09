//eslint-disable-next-line
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import DraftPages from './DraftPages'

const query = gql`
  query BookById ($id: ID!) {
    book(id: $id) {
      id
      pages {
        id
        title
        description
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
    pages: book && book[0] && book[0].pages,
  }),
})(DraftPages)
