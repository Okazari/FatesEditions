import React from 'react'
import { Query, Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { RouteService, AuthService } from 'services'
import Book from 'components/common/Book'

const query = gql`
  query lastGame($bookId: ID!){
    lastGame(bookId: $bookId) {
      id
      lastModificationDate
    }
  }
`

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
  const token = AuthService.getToken()
  if (!token) {
    return (
      <Mutation
        mutation={mutation}
        variables={{
          bookId: book.id,
        }}
      >
        {
          (createGame) => {
            const _createGame = bookId => createGame(bookId)
              .then(({ data }) =>
                RouteService.goTo(RouteService.routes.playgame(data.createGame.id)))
            return <Book {...props} book={book} onClick={bookId => _createGame(bookId)} />
          }
        }
      </Mutation>
    )
  }
  return (
    <Query
      query={query}
      variables={{
        bookId: book.id,
      }}
    >
      {
        ({ data }) => {
          let onClick = () => null
          if (data && data.lastGame && data.lastGame.id) {
            onClick = () => RouteService.goTo(RouteService.routes.playgame(data.lastGame.id))
          }
          return (
            <Book
              {...props} book={book}
              onClick={onClick}
            />
          )
        }
      }
    </Query>
  )
}

export default PlayableBook
