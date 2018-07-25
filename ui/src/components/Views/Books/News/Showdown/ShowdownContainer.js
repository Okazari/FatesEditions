import React from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { RouteService } from 'services'
import Loader from 'components/common/Loader'
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
      (createGame, { loading, error }) => {
        const _createGame = bookId => createGame(bookId)
          .then(({ data }) => RouteService.goTo(RouteService.routes.playgame(data.createGame.id)))
        if (error) return null
        return <Showdown {...props} onClick={() => _createGame(book.id)}/>
      }
    }
    </Mutation>
  )
}

export default ShowdownContainer