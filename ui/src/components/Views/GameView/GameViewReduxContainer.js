import React from 'react'
import { connect } from 'react-redux'
import { setGame, setBook } from 'redux/actions'
import GameView from './GameView'

const GameViewReduxContainer = (props) => {
  const newGameState = { ...props.game }
  delete newGameState.book
  props.dispatch(setBook(props.game.book))
  props.dispatch(setGame(newGameState))
  return <GameView />
}

export default connect()(GameViewReduxContainer)
