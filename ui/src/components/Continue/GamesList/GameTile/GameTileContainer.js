import React from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import GameTile from './GameTile'

const mutation = gql`
  mutation deleteGame($gameId: ID!){
    deleteGame(gameId: $gameId){
      id
      games {
        id
      }
    }
  }
`

// TODO: Add loader and error display
const GameTileContainer = props => (
  <Mutation
    mutation={mutation}
    variables={{
      gameId: props.game.id,
    }}
  >
    {
      (deleteGame, { loading, error }) => {
        if (loading) return null
        if (error) return null
        return <GameTile {...props} deleteGame={deleteGame} />
      }
    }
  </Mutation>
)

export default GameTileContainer

