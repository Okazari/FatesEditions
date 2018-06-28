import React from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { AuthService } from 'services'
import GameViewReduxContainer from './GameViewReduxContainer'

const mutation = gql`
mutation createGame($bookId: ID!, $playerId: ID!) {
  createGame(bookId: $bookId, playerId: $playerId) {
    id
    currentPageId
    playerId
    book {
      id
      name
      tags
      synopsis
      cover
      startingPageId
      genreId
      draft
      creationDate
      lastModificationDate
      revision
      stats {
        id
        name
        description
        initValue
        max
        min
        visible
      }
      objects {
        id
        name
        description
        atStart
        visible
      }
      author {
        id
        username
      }
      pages {
        id
        title
        description
        text
        effects {
          id
          operator
          subject
          value
          type
        }
        transitions {
          id
          fromPage
          toPage
          text
          conditionOperator
          effects {
            id
            operator
            subject
            value
            type
          }
          conditions {
            id
            operator
            subject
            value
            type
          }
        }
      }
    }
    stats
    objects
  }
}
`
// TODO: Add loading and error returns
const GameViewContainer = ({ params }) => (
  <Mutation
    mutation={mutation}
    variables={{
      bookId: params.bookId,
      playerId: AuthService.getConnectedUserId(),
    }}
  >
    {
      ({ loading, error, data }) => {
        if (loading) return null
        if (error) return null
        const game = data.createGame
        return <GameViewReduxContainer key={game.id} game={game} />
      }
    }
  </Mutation>
)

export default GameViewContainer

