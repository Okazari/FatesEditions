import React from 'react'
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'
import { BookGrid, Book } from 'components/common'

const query = gql`
  query Author {
    author {
      id
      publications {
        id
        name
        cover
        author {
          id
          username
        }
      }
    }
  }
`

const queryOptions = {
  options: {
    fetchPolicy: 'cache-and-network',
  },
  props: ({ data: { loading, author } }) => ({
    author,
  }),
}

const mutation = gql`
  mutation unpublishBook($id: ID!) {
    unpublishBook(id: $id) {
      id
      publications {
        id
      }
      drafts {
        id
      }
    }
  }
`

const mutationOptions = {
  name: 'unpublishBook',
}

const BookTile = ({ showDelay, content, onDelete }) => (<Book
  showDelay={showDelay}
  book={content}
  onDelete={() => onDelete(content.id)}
/>)

const PublicationsContainer = ({ unpublishBook, author = {} }) => {
  const _unpublishBook = id => unpublishBook({
    variables: {
      id,
    },
  })
  return (
    <BookGrid
      tilesList={author && author.publications}
      TileComponent={BookTile}
      onDelete={_unpublishBook}
    />
    // <Publications {...props} unpublishBook={_unpublishBook} />
  )
}

export default compose(
  graphql(query, queryOptions),
  graphql(mutation, mutationOptions),
)(PublicationsContainer)
