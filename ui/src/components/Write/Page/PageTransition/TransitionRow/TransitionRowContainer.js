import React from 'react'
import gql from 'graphql-tag'
import { graphql, compose } from 'react-apollo'
import TransitionRow from './TransitionRow'

const core = `
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
`
const updateTransitionMutation = gql`
  mutation updatePageTransition($bookId: ID!, $pageId: ID!, $transition: TransitionInput!) {
    updatePageTransition(bookId: $bookId, pageId: $pageId, transition: $transition) {
      ${core}
    }
  }
`

const updateTransitionMutationOptions = {
  name: 'updateTransition',
}


const TransitionRowContainer = (props) => {
  const { book = {}, pageId = {}, transition = {}, updateTransition } = props
  const bookId = book.id
  const _updateTransition = updatedTransition => updateTransition({
    variables: {
      pageId,
      bookId,
      transition: { id: transition.id, ...updatedTransition },
    },
  })
  return (
    <TransitionRow
      {...props}
      updateTransition={_updateTransition}
    />
  )
}

export default compose(
  graphql(updateTransitionMutation, updateTransitionMutationOptions),
)(TransitionRowContainer)
