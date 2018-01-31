import React from 'react'
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'
import DraftPages from './DraftPages'

const corePage = `
  id
  title
  description
`

const core = `
  id
  pages {
    ${corePage}
  }
`

const query = gql`
  query BookById ($id: ID!) {
    book(id: $id) {
      ${core}
    }
  }
`

const queryOptions = {
  options: ({ params }) => ({
    variables: {
      id: params.draftId,
    },
  }),
  props: ({ data: { book } }) => ({
    book,
  }),
}

const addMutation = gql`
  mutation addPage($bookId: ID!) {
    createPage(bookId: $bookId) {
      ${core}
    }
  }
`

const addMutationOptions = {
  name: 'addPage',
}

const removeMutation = gql`
  mutation removePage($bookId: ID!, $pageId: ID!) {
    deletePage(bookId: $bookId, pageId: $pageId) {
      ${core}
    }
  }
`

const removeMutationOptions = {
  name: 'removePage',
}

const DraftPagesContainer = (props) => {
  const { book, addPage, removePage } = props
  const _addPage = () => addPage({ variables: { bookId: book.id } })
  const _removePage = page => removePage({ variables: { bookId: book.id, pageId: page.id } })
  return <DraftPages {...props} removePage={_removePage} addPage={_addPage} />
}
export default compose(
  graphql(query, queryOptions),
  graphql(addMutation, addMutationOptions),
  graphql(removeMutation, removeMutationOptions),
)(DraftPagesContainer)
