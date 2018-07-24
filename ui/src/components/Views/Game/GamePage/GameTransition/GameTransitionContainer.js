import React from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { connect } from 'react-redux'
import { setGame } from 'redux/actions'
import { GameService, AuthService } from 'services'
import GameTransition from './GameTransition'

const mapStateToProps = ({ game }, { transitionId }) => {
  const transition = game.book.transition[transitionId]
  const mappedTransition = {
    ...transition,
    conditions: transition.conditions.map(id => game.book.condition[id]),
  }
  const text = transition.text
  let visible = true
  const errors = []

  try {
    visible = GameService.checkTransitionVisibility(game, mappedTransition)
    GameService.checkEffects(game, transitionId)
  } catch (error) {
    errors.push(error)
  }

  const updateGame = () => GameService.changePageAndApplyEffects(game, transitionId)

  return {
    visible,
    text,
    updateGame,
    errors,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setGame: (game) => {
      delete game.book
      delete game.__typename
      dispatch(setGame(game))
      return game
    },
  }
}

const mutation = gql`
mutation saveGame($game: GameInput!) {
  updateGame(game: $game) {
    id
    currentPageId
    stats
    objects
  }
}
`

const GameTransitionContainer = props => (
  <Mutation
    mutation={mutation}
  >
    {
      (saveGame, { loading, error }) => {
        const _saveGame = game => saveGame({ variables: {
          game,
        } })
        if (loading) return null
        if (error) return null
        return (
          <GameTransition
            {...props}
            saveGame={_saveGame}
          />
        )
      }
    }
  </Mutation>
)

export default connect(mapStateToProps, mapDispatchToProps)(GameTransitionContainer)
