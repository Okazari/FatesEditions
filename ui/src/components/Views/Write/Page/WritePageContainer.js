import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import WritePage from './WritePage'

const query = gql`
  query PageByID ($bookId: ID!, $pageId: ID!) {
    page(bookId: $bookId, pageId: $pageId) {
      id
      text
      title
      description
      backgroundMusic
      effects {
        id
        operator
        subject
        value
        type
      }
      transitions {
        id
        toPage
        conditionOperator
        text
        conditions {
          id
          operator
          subject
          value
          type
        }
        effects {
          id
          operator
          subject
          value
          type
        }
      }
    }
    book(id: $bookId) {
      id
      stats {
        id
        name
      }
      objects {
        id
        name
      }
      pages {
        id
        title
      }
    }
  }
`

const queryOptions = {
  options: ({ params: { draftId, pageId } }) => ({
    variables: {
      bookId: draftId,
      pageId,
    },
  }),
  props: ({ data: { loading, page } }) => ({
    page,
    loading,
  }),
}

export default graphql(query, queryOptions)(WritePage)
