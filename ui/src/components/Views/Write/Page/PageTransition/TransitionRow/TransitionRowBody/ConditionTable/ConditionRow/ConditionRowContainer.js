import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import ConditionRow from './ConditionRow'

const updateConditionMutation = gql`
  mutation updatePageTransitionCondition($bookId: ID!, $pageId: ID!, $transitionId: ID!, $condition: EffectInput!) {
    updatePageTransitionCondition(bookId: $bookId, pageId: $pageId, transitionId: $transitionId, condition: $condition) {
      id
      operator
      subject
      value
      type
    }
  }
`

const updateConditionMutationOptions = {
  name: 'updateCondition',
}

const ConditionRowContainer = (props) => {
  const { book = {}, pageId = '', transitionId, updateCondition } = props
  const bookId = book.id

  const _updateCondition = condition => updateCondition({
    variables: {
      pageId,
      bookId,
      transitionId,
      condition,
    },
  })

  return (
    <ConditionRow
      {...props}
      updateCondition={_updateCondition}
    />
  )
}

export default graphql(
  updateConditionMutation,
  updateConditionMutationOptions,
)(ConditionRowContainer)
