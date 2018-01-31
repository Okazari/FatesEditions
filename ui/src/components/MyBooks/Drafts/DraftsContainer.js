import React from 'react'
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'
import { AuthService } from 'services'
import Drafts from './Drafts'

const authorVariables = {
  author: AuthService.getConnectedUserId(),
}

const core = `
  id
  name
  cover
  author {
    id
    username
  }
`

const query = gql`
  query ConnectedUserBook ($author: ID!) {
    books(draft: true, author: $author) {
      ${core}
    }
  }
`

const queryOptions = {
  options: () => ({
    variables: authorVariables,
  }),
  props: ({ data: { books } }) => ({
    books,
  }),
}

const createBookMutation = gql`
  mutation CreateBook ($author: ID!) {
    createBook(author: $author) {
      ${core}
    }
  }
`

const createBookOptions = {
  options: () => ({
    variables: authorVariables,
    update: (proxy, { data: { createBook } }) => {
      const data = proxy.readQuery({ query, variables: authorVariables })
      data.books.push(createBook)
      proxy.writeQuery({ query, variables: authorVariables, data })
    },
  }),
  name: 'createBook',
}

const deleteBookMutation = gql`
  mutation DeleteBook ($id: ID!) {
    deleteBook(id: $id)
  }
`

const deleteBookOptions = {
  options: () => ({
    update: (proxy, { data: { deleteBook } }) => {
      const data = proxy.readQuery({ query, variables: authorVariables })
      data.books = data.books.filter(book => book.id !== deleteBook)
      proxy.writeQuery({ query, variables: authorVariables, data })
    },
  }),
  name: 'deleteBook',
}

const DraftContainer = ({ createBook, deleteBook, ...rest }) => {
  const _createBook = () => createBook()
  const _deleteBook = id => deleteBook({ variables: { id } })
  return <Drafts {...rest} createBook={_createBook} deleteBook={_deleteBook} />
}

export default compose(
  graphql(query, queryOptions),
  graphql(createBookMutation, createBookOptions),
  graphql(deleteBookMutation, deleteBookOptions),
)(DraftContainer)
