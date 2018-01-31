import React from 'react'
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'
import DraftGeneral from './DraftGeneral'

const query = gql`

  query BookById ($id: ID!) {
    book(id: $id) {
      id
      name
      cover
      author {
        id
        username
      }
      genreId
      synopsis
      startingPageId
      pages {
        id
        title
      }
      stats {
        id
        initValue
      }
    }
  }
`

const queryOptions = {
  options: ({ params }) => ({
    variables: {
      id: params.draftId,
    },
  }),
  props: ({ data: { book }, ...rest }) => ({
    ...rest,
    book,
  }),
}

const mutation = gql`
  mutation updateBook($book: BookInput!) {
    updateBook(book: $book) {
      id
      name
      cover
      authorId
      genreId
      synopsis
      startingPageId
    }
  }
`

const mutationOptions = {
  name: 'updateBook',
}

const DraftGeneralContainer = (props) => {
  const { updateBook, book } = props
  const _updateBook = updatedBook => updateBook({
    variables: {
      book: {
        id: book.id,
        ...updatedBook,
      },
    },
  })
  return <DraftGeneral {...props} updateBook={_updateBook} />
}

export default compose(
  graphql(query, queryOptions),
  graphql(mutation, mutationOptions),
)(DraftGeneralContainer)
