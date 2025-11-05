import React from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { RouteService } from 'services'
import Showdown from './Showdown'

const createGameMutation = gql`
mutation createGame($bookId: ID!) {
  createGame(bookId: $bookId) {
    id
  }
}
`

const unpublishBookMutation = gql`
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

const ShowdownContainer = (props) => {
  const { book } = props
  return (
    <Mutation
      mutation={createGameMutation}
      variables={{
        bookId: book.id,
      }}
    >
      {
        (createGame) => {
          const _createGame = bookId => createGame(bookId)
            .then(({ data }) => RouteService.goTo(RouteService.routes.playgame(data.createGame.id)))
          return (
            <Mutation
              mutation={unpublishBookMutation}
            >
              {
                (unpublishBook) => {
                  const _unpublishBook = id => unpublishBook({
                    variables: {
                      id,
                    },
                  }).then(() => {
                    RouteService.goTo(RouteService.routes.writebook(id))
                  })
                  return (
                    <Showdown
                      {...props}
                      onClick={() => _createGame(book.id)}
                      unpublishBook={_unpublishBook}
                    />
                  )
                }
              }
            </Mutation>
          )
        }
      }
    </Mutation>
  )
}

export default ShowdownContainer
