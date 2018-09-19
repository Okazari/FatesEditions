import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import EffectRow from './EffectRow'

const updateEffectMutation = gql`
  mutation updatePageTransitionEffect($bookId: ID!, $pageId: ID!, $transitionId: ID!, $effect: EffectInput!) {
    updatePageTransitionEffect(bookId: $bookId, pageId: $pageId, transitionId: $transitionId, effect: $effect) {
      id
      operator
      subject
      value
      type
    }
  }
`

const updateEffectMutationOptions = {
  name: 'updateEffect',
}

const EffectRowContainer = (props) => {
  const { book = {}, pageId = '', transitionId, updateEffect } = props
  const bookId = book.id

  const _updateEffect = effect => updateEffect({
    variables: {
      pageId,
      bookId,
      transitionId,
      effect,
    },
  })

  return (
    <EffectRow
      {...props}
      updateEffect={_updateEffect}
    />
  )
}

export default graphql(
  updateEffectMutation,
  updateEffectMutationOptions,
)(EffectRowContainer)
