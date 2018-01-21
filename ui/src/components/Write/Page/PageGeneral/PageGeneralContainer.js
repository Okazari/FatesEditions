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

const updatePage = gql`
  mutation updatePage($bookId: ID!, $page: PageInput!) {
    updatePage(bookId: $bookId, page: $page) {
      ${core}
    }
  }
`

const updatePageOptions = {
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

export default compose(
  graphql(updatePage, updatePageOptions),
  graphql(query, queryOptions),
  graphql(addMutation, addMutationOptions),
  graphql(removeMutation, removeMutationOptions),
  graphql(updateMutation, updateMutationOptions),
)(PageGeneral)
