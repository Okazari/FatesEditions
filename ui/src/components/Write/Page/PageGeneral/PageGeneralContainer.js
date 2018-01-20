import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'
import PageGeneral from './PageGeneral'

const core = `
  id
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
`

const query = gql`
  query PageByID ($bookId: ID!, $pageId: ID!) {
    page(bookId: $bookId, pageId: $pageId) {
      ${core}
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
  props: ({ data: { page } }) => ({
    page,
  }),
}

const mutation = gql`
  mutation updatePage($bookId: ID!, $page: PageInput!) {
    updatePage(bookId: $bookId, page: $page) {
      ${core}
    }
  }
`

const mutationOptions = {
  name: 'updatePage',
}

export default compose(
  graphql(query, queryOptions),
  graphql(mutation, mutationOptions),
)(PageGeneral)
