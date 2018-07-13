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
  drafts {
    id
    name
    cover
    author {
      id
      username
    }
  }
`

const query = gql`
  query Author {
    author {
      ${core}
    }
  }
`

const queryOptions = {
  props: ({ data: { loading, author } }) => ({
    author,
    loading,
  }),
}

const createBookMutation = gql`
  mutation CreateBook {
    createBook {
      ${core}
    }
  }
`

const createBookOptions = {
  name: 'createBook',
}

const deleteBookMutation = gql`
  mutation DeleteBook ($id: ID!) {
    deleteBook(id: $id) {
      ${core}
    }
  }
`

const deleteBookOptions = {
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
