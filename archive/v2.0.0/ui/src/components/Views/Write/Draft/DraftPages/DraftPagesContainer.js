import React from 'react'
import { graphql, compose } from 'react-apollo'
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
      id
      pages {
        id
        title
        description
      }
    }
  }
`

const addMutationOptions = {
  name: 'addPage',
}

const removeMutation = gql`
  mutation removePage($bookId: ID!, $pageId: ID!) {
    deletePage(bookId: $bookId, pageId: $pageId) {
      id
      pages {
        id
        title
        transitions {
          toPage
        }
        description
      }
    }
  }
`

const removeMutationOptions = {
  name: 'removePage',
}

const updateMutation = gql`
  mutation updatePage($bookId: ID!, $page: PageInput!) {
    updatePageReturnBook(bookId: $bookId, page: $page) {
      id
      pages {
        id
        title
        description
      }
    }
  }
`

const updateMutationOptions = {
  name: 'updatePage',
}

const DraftPagesContainer = (props) => {
  const { book, addPage, removePage, updatePage } = props
  const _addPage = () => addPage({ variables: { bookId: book.id } })
  const _removePage = page => removePage({ variables: { bookId: book.id, pageId: page.id } })
  const _updatePage = page => updatePage({ variables: { bookId: book.id, page } })
  return (
    <DraftPages
      {...props}
      removePage={_removePage}
      addPage={_addPage}
      updatePage={_updatePage}
    />
  )
}
export default compose(
  graphql(query, queryOptions),
  graphql(addMutation, addMutationOptions),
  graphql(removeMutation, removeMutationOptions),
  graphql(updateMutation, updateMutationOptions),
)(DraftPagesContainer)
