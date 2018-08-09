import React from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { RouteService } from 'services'
import Showdown from './Showdown'

const mutation = gql`
mutation createGame($bookId: ID!) {
  createGame(bookId: $bookId) {
    id
  }
}
`

const ShowdownContainer = (props) => {
  const { book } = props
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
            .then(({ data }) => RouteService.goTo(RouteService.routes.playgame(data.createGame.id)))
          return <Showdown {...props} onClick={() => _createGame(book.id)} />
        }
      }
    </Mutation>
  )
}

export default ShowdownContainer
