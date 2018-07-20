import React from 'react'
import gql from 'graphql-tag'
import { graphql, compose } from 'react-apollo'
import TransitionEffect from './TransitionEffect'

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

const addEffectMutation = gql`
  mutation addPageTransitionEffect($bookId: ID!, $pageId: ID!, $transitionId: ID!) {
    createPageTransitionEffect(bookId: $bookId, pageId: $pageId, transitionId: $transitionId) {
      ${core}
    }
  }
`

const addEffectMutationOptions = {
  name: 'addEffect',
}

const removeEffectMutation = gql`
  mutation removePageTransitionEffect($bookId: ID!, $pageId: ID!, $transitionId: ID!, $effectId: ID!) {
    deletePageTransitionEffect(bookId: $bookId, pageId: $pageId, transitionId: $transitionId, effectId: $effectId) {
      ${core}
    }
  }
`

const removeEffectMutationOptions = {
  name: 'removeEffect',
}

const TransitionEffectContainer = (props) => {
  const { book = {}, pageId = '', transition = {}, addEffect, removeEffect } = props
  const bookId = book.id

  const _addEffect = () => addEffect({
    variables: {
      pageId,
      bookId,
      transitionId: transition.id,
    },
  })

  const _removeEffect = effectId => removeEffect({
    variables: {
      pageId,
      bookId,
      transitionId: transition.id,
      effectId,
    },
  })

  return (
    <TransitionEffect
      {...props}
      addEffect={_addEffect}
      removeEffect={_removeEffect}
    />
  )
}

export default compose(
  graphql(addEffectMutation, addEffectMutationOptions),
  graphql(removeEffectMutation, removeEffectMutationOptions),
)(TransitionEffectContainer)
