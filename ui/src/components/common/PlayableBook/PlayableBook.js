import React from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { RouteService } from 'services'
import Loader from 'components/common/Loader'
import Book from 'components/common/Book'

const mutation = gql`
mutation createGame($bookId: ID!) {
  createGame(bookId: $bookId) {
    id
  }
}
`

// TODO: error returns
const PlayableBook = (props) => {
  const book = props.content
  return (
    <Mutation
      mutation={mutation}
      variables={{
        bookId: book.id,
      }}
    >
      {
        (createGame, { loading, error }) => {
          const _createGame = bookId => createGame(bookId)
            .then(({ data }) => RouteService.goTo(RouteService.routes.playgame(data.createGame.id)))
          if (loading) return <Loader />
          if (error) return null
          return <Book {...props} book={book} onClick={bookId => _createGame(bookId)} />
        }
      }
    </Mutation>
  )
}

export default PlayableBook
