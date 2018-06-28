import React from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { AuthService } from 'services'
import Book from './Book'

const mutation = gql`
mutation createGame($bookId: ID!, $playerId: ID!) {
  createGame(bookId: $bookId, playerId: $playerId) {
    id
  }
}
`

// TODO: add loading and error returns
const BookContainer = ({ book }) => (
  <Mutation
    mutation={mutation}
    variables={{
      bookId: book.id,
      playerId: AuthService.getConnectedUserId(),
    }}
  >
    {
      (createGame, { loading, error }) => {
        
        if (loading) return null
        if (error) return null
        return <Book {...props} /> 
      }
    }
   </Mutation>
)







{
  const { createGame, book } = props
  const _createGame = game => createGame({
    variables: {
      bookId: book.id,
      playerId: AuthService.getConnectedUserId(),
    }
  })
  return <Book {...props} createGame={_createGame} />
}

export default graphql(mutation, mutationOptions)(BookContainer)
