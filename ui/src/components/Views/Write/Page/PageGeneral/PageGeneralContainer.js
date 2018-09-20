import React from 'react'
import gql from 'graphql-tag'
import { graphql, compose } from 'react-apollo'
import PageGeneral from './PageGeneral'

const coreEffect = `
  id
  operator
  subject
  value
  type
`
const coreRoll = `
  id
  min
  max
  modifier
  stat
`

const corePage = `
  id
  title
  description
  backgroundMusic
`


const query = gql`
  query PageByID ($bookId: ID!, $pageId: ID!) {
    page(bookId: $bookId, pageId: $pageId) {
      ${corePage}
      effects {
        ${coreEffect}
      }
      rolls {
        ${coreRoll}
      }
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
      ${corePage}
    }
  }
`

const updatePageMutationOptions = {
  name: 'updatePage',
}

const PageGeneralContainer = (props) => {
  const { book = {}, page = {}, updatePage } = props
  const bookId = book.id
  const pageId = page.id
  const _updatePage = updatedPage => updatePage({
    variables: {
      page: { id: pageId, ...updatedPage },
      bookId,
    },
  })
  return (
    <PageGeneral
      {...props}
      updatePage={_updatePage}
    />
  )
}

export default compose(
  graphql(query, queryOptions),
  graphql(updatePageMutation, updatePageMutationOptions),
)(PageGeneralContainer)
