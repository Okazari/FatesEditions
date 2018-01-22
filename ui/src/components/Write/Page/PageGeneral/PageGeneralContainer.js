import React from 'react'
import gql from 'graphql-tag'
import { graphql, compose } from 'react-apollo'
import PageGeneral from './PageGeneral'

const core = `
  id
  title
  description
  backgroundMusic
  effects {
    id
    operator
    subject
    value
    type
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

const updatePageMutation = gql`
  mutation updatePage($bookId: ID!, $page: PageInput!) {
    updatePage(bookId: $bookId, page: $page) {
      ${core}
    }
  }
`

const updatePageMutationOptions = {
  name: 'updatePage',
}

const addMutation = gql`
  mutation addEffect($bookId: ID!, $pageId: ID!) {
    createPageEffect(bookId: $bookId, pageId: $pageId) {
      ${core}
    }
  }
`

const addMutationOptions = {
  name: 'addEffect',
}

const removeMutation = gql`
  mutation removeEffect($bookId: ID!, $pageId: ID!, $effectId: ID!) {
    deletePageEffect(bookId: $bookId, pageId: $pageId, effectId: $effectId) {
      ${core}
    }
  }
`

const removeMutationOptions = {
  name: 'removeEffect',
}

const updateMutation = gql`
  mutation updateEffect($bookId: ID!, $pageId: ID!, $effect: EffectInput!) {
    updatePageEffect(bookId: $bookId, pageId: $pageId, effect: $effect) {
      ${core}
    }
  }
`

const updateMutationOptions = {
  name: 'updateEffect',
}

const PageGeneralContainer = (props) => {
  const { book = {}, page = {}, updatePage, addEffect, removeEffect, updateEffect } = props
  const bookId = book.id
  const pageId = page.id
  const _updatePage = updatedPage => updatePage({
    variables: {
      page: { id: pageId, ...updatedPage },
      bookId,
    },
  })
  const _addEffect = () => addEffect({
    variables: {
      bookId,
      pageId,
    },
  })
  const _removeEffect = effectId => removeEffect({
    variables: {
      bookId,
      pageId,
      effectId,
    },
  })
  const _updateEffect = effect => updateEffect({
    variables: {
      bookId,
      pageId,
      effect,
    },
  })
  return (
    <PageGeneral
      {...props}
      updatePage={_updatePage}
      updateEffect={_updateEffect}
      addEffect={_addEffect}
      removeEffect={_removeEffect}
    />
  )
}

export default compose(
  graphql(updatePageMutation, updatePageMutationOptions),
  graphql(query, queryOptions),
  graphql(addMutation, addMutationOptions),
  graphql(removeMutation, removeMutationOptions),
  graphql(updateMutation, updateMutationOptions),
)(PageGeneralContainer)
