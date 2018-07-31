import React from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { connect } from 'react-redux'
import { setGame } from 'redux/actions'
import { GameService } from 'services'
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

  return {
    visible,
    text,
    game,
    transitionId,
    errors,
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

const GameTransitionContainer = (props) => {
  const { game, transitionId, dispatch } = props
  return (
    <Mutation
      mutation={mutation}
    >
      {
        (saveGame) => {
          const updateGame = () => GameService.changePageAndApplyEffects(game, transitionId)
          const _saveGame = gameToSave => saveGame({ variables: {
            game: gameToSave,
          } })
          const onClick = () => {
            const updatedGame = updateGame()
            delete updatedGame.book
            delete updatedGame.__typename
            dispatch(setGame(updatedGame))
            if (updatedGame.id !== null){
              _saveGame(updatedGame)
            }
          }
          return (
            <GameTransition
              {...props}
              onClick={onClick}
            />
          )
        }
      }
    </Mutation>
  )
}

export default connect(mapStateToProps)(GameTransitionContainer)
