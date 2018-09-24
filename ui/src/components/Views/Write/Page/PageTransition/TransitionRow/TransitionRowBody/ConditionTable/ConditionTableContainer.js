import React from 'react'
import gql from 'graphql-tag'
import { graphql, compose } from 'react-apollo'
import ConditionTable from './ConditionTable'

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

const addConditionMutation = gql`
  mutation addPageTransitionCondition($bookId: ID!, $pageId: ID!, $transitionId: ID!) {
    createPageTransitionCondition(bookId: $bookId, pageId: $pageId, transitionId: $transitionId) {
      ${core}
    }
  }
`

const addConditionMutationOptions = {
  name: 'addCondition',
}

const removeConditionMutation = gql`
  mutation removePageTransitionCondition($bookId: ID!, $pageId: ID!, $transitionId: ID!, $conditionId: ID!) {
    deletePageTransitionCondition(bookId: $bookId, pageId: $pageId, transitionId: $transitionId, conditionId: $conditionId) {
      ${core}
    }
  }
`

const removeConditionMutationOptions = {
  name: 'removeCondition',
}

const ConditionTableContainer = (props) => {
  const { book = {}, pageId = '', transition = {}, addCondition, removeCondition } = props
  const bookId = book.id

  const _addCondition = () => addCondition({
    variables: {
      pageId,
      bookId,
      transitionId: transition.id,
    },
  })

  const _removeCondition = conditionId => removeCondition({
    variables: {
      pageId,
      bookId,
      transitionId: transition.id,
      conditionId,
    },
  })

  return (
    <ConditionTable
      {...props}
      addCondition={_addCondition}
      removeCondition={_removeCondition}
    />
  )
}

export default compose(
  graphql(addConditionMutation, addConditionMutationOptions),
  graphql(removeConditionMutation, removeConditionMutationOptions),
)(ConditionTableContainer)
