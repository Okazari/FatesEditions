//eslint-disable-next-line
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import DraftItems from './DraftItems'

const query = gql`
  query BookById ($id: ID!) {
    book(id: $id) {
      id
      objects {
        id
        name
        description
        atStart
        visible
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
    draft: book,
  }),
})(DraftItems)
