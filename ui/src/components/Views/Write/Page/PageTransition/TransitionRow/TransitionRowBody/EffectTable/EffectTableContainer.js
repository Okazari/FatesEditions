import React from 'react'
import gql from 'graphql-tag'
import { graphql, compose } from 'react-apollo'
import { EffectTable } from 'components/Views/Write/Page/common'

const coreEffect = `
  id
  operator
  subject
  value
  type
`

const core = `
  id
  toPage
  conditionOperator
  text
  conditions {
    ${coreEffect}
  }
  effects {
    ${coreEffect}
  }
`


const addEffectMutation = gql`
  mutation addPageTransitionEffect(
    $bookId: ID!,
    $pageId: ID!,
    $transitionId: ID!,
  ) {
    createPageTransitionEffect(
      bookId: $bookId,
      pageId: $pageId,
      transitionId: $transitionId,
    ) {
      ${core}
    }
  }
`

const addEffectMutationOptions = {
  name: 'addEffect',
}


const updateEffectMutation = gql`
  mutation updatePageTransitionEffect(
    $bookId: ID!,
    $pageId: ID!,
    $transitionId: ID!,
    $effect: EffectInput!,
  ) {
    updatePageTransitionEffect(
      bookId: $bookId,
      pageId: $pageId,
      transitionId: $transitionId,
      effect: $effect,
    ) {
      ${coreEffect}
    }
  }
`

const updateEffectMutationOptions = {
  name: 'updateEffect',
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

const EffectTableContainer = (props) => {
  const {
    book = {},
    pageId = '',
    transition = {},
    addEffect,
    updateEffect,
    removeEffect,
  } = props
  const bookId = book.id

  const _addEffect = () => addEffect({
    variables: {
      pageId,
      bookId,
      transitionId: transition.id,
    },
  })

  const _updateEffect = effect => updateEffect({
    variables: {
      pageId,
      bookId,
      transitionId: transition.id,
      effect,
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
    <EffectTable
      {...props}
      addEffect={_addEffect}
      updateEffect={_updateEffect}
      removeEffect={_removeEffect}
    />
  )
}

export default compose(
  graphql(addEffectMutation, addEffectMutationOptions),
  graphql(updateEffectMutation, updateEffectMutationOptions),
  graphql(removeEffectMutation, removeEffectMutationOptions),
)(EffectTableContainer)
