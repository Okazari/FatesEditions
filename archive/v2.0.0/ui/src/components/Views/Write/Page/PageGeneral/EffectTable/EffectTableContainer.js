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

const corePage = `
  id
  effects {
  ${coreEffect}
}
`

const addEffectMutation = gql`
  mutation addPageEffect(
    $bookId: ID!,
    $pageId: ID!,
  ) {
    createPageEffect(
      bookId: $bookId,
      pageId: $pageId,
    ) {
      ${corePage}
    }
  }
`

const addEffectMutationOptions = {
  name: 'addEffect',
}

const updateEffectMutation = gql`
  mutation updatePageEffect(
    $bookId: ID!,
    $pageId: ID!,
    $effect: EffectInput!,
  ) {
    updatePageEffect(
      bookId: $bookId,
      pageId: $pageId,
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
  mutation removePageEffect(
    $bookId: ID!,
    $pageId: ID!,
    $effectId: ID!
  ) {
    deletePageEffect(
      bookId: $bookId,
      pageId: $pageId,
      effectId: $effectId,
    ) {
      ${corePage}
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
    addEffect,
    removeEffect,
    updateEffect,
  } = props
  const bookId = book.id

  const _addEffect = () => addEffect({
    variables: {
      pageId,
      bookId,
    },
  })

  const _updateEffect = effect => updateEffect({
    variables: {
      pageId,
      bookId,
      effect,
    },
  })

  const _removeEffect = effectId => removeEffect({
    variables: {
      pageId,
      bookId,
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
