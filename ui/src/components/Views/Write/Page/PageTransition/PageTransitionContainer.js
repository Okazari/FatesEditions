import React from 'react'
import gql from 'graphql-tag'
import { graphql, compose } from 'react-apollo'
import PageTransition from './PageTransition'

const core = `
  id
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
`

const query = gql`
  query PageByID ($bookId: ID!, $pageId: ID!) {
    page(bookId: $bookId, pageId: $pageId) {
      ${core}
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
  props: ({ data: { page, book } }) => ({
    page,
    book,
  }),
}

const addMutation = gql`
  mutation addTransition($bookId: ID!, $pageId: ID!) {
    createPageTransition(bookId: $bookId, pageId: $pageId) {
      ${core}
    }
  }
`

const addMutationOptions = {
  name: 'addTransition',
}

const removeMutation = gql`
  mutation removeTransition($bookId: ID!, $pageId: ID!, $transitionId: ID!) {
    deletePageTransition(bookId: $bookId, pageId: $pageId, transitionId: $transitionId) {
      ${core}
    }
  }
`

const removeMutationOptions = {
  name: 'removeTransition',
}

const PageTransitionContainer = (props) => {
  const { book, page, addTransition, removeTransition } = props
  const _addTransition = () => addTransition({
    variables: {
      bookId: book.id,
      pageId: page.id,
    },
  })

  const _removeTransition = transitionId => removeTransition({
    variables: {
      bookId: book.id,
      pageId: page.id,
      transitionId,
    },
  })
  return (
    <PageTransition
      {...props}
      addTransition={_addTransition}
      removeTransition={_removeTransition}
    />
  )
}

export default compose(
  graphql(query, queryOptions),
  graphql(addMutation, addMutationOptions),
  graphql(removeMutation, removeMutationOptions),
)(PageTransitionContainer)
