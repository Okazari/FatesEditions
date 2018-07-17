import React from 'react'
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'
import classnames from 'classnames'
import { RouteService } from 'services'
import { BookGrid, Icon, Book } from 'components/common'
import styles from './style.scss'

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
  options: {
    fetchPolicy: 'cache-and-network',
  },
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

const editDraft = (draftId) => {
  RouteService.goTo(RouteService.routes.writebook(draftId))
}

const BookTile = ({ showDelay, content, onDelete }) => (<Book
  showDelay={showDelay}
  book={content}
  onClick={() => editDraft(content.id)}
  onDelete={() => onDelete(content.id)}
/>)

const DraftContainer = ({ createBook, deleteBook, author = {} }) => {
  const books = author.drafts
  const _createBook = () => createBook()
  const _deleteBook = id => deleteBook({ variables: { id } })
  return (
    <BookGrid
      tilesList={books}
      FirstTileComponent={
        () => <div
          onClick={_createBook}
          className={classnames(styles.book, styles.newBook)}
        >
          <Icon icon="library_add" />
        </div>
      }
      TileComponent={BookTile}
      onDelete={_deleteBook}
    />
  )
}

export default compose(
  graphql(query, queryOptions),
  graphql(createBookMutation, createBookOptions),
  graphql(deleteBookMutation, deleteBookOptions),
)(DraftContainer)
