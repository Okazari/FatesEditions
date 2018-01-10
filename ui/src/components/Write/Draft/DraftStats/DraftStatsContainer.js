//eslint-disable-next-line
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import DraftStats from './DraftStats'

const query = gql`
  query BookById ($id: ID!) {
    book(id: $id) {
      id
      stats {
        id
        name
        description
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
})(DraftStats)
