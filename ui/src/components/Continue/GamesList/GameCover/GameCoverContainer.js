import React from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { AuthService } from 'services'
import GameCover from './GameCover'

const mutation = gql`
  mutation deleteGame($gameId: ID, $playerId: ID!){
    deleteGame(gameId: $gameId, playerId: $playerId){
      id
      games {
        id
      }
    }
  }
`

// TODO: Add loader and error display
const GameCoverMutation = props => (
  <Mutation 
    mutation={mutation}
    variables={{
      gameId: props.game.id,
      playerId: AuthService.getConnectedUserId(),
    }}
  >
  {
    (deleteGame, { loading, error }) => {
      if (loading) return null
      if (error) return null
      return <GameCover {...props} deleteGame={deleteGame} />
    } 
  }
  </Mutation>
)

export default GameCoverMutation

