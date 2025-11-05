import React from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import Loader from 'components/common/Loader'
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

// TODO: Add error display
const GameTileContainer = props => (
  <Mutation
    mutation={mutation}
    variables={{
      gameId: props.content.id,
    }}
  >
    {
      (deleteGame, { loading, error }) => {
        if (loading) return <Loader />
        if (error) return null
        return <GameTile {...props} deleteGame={deleteGame} />
      }
    }
  </Mutation>
)

export default GameTileContainer

