import React from 'react'
import { connect } from 'react-redux'
import { setGame, setBook } from 'redux/actions'
import TrialView from './TrialView'

const TrialViewReduxContainer = (props) => {
  const newGameState = { ...props.game }
  delete newGameState.book
  props.dispatch(setBook(props.game.book))
  props.dispatch(setGame(newGameState))
  return <TrialView />
}

export default connect()(TrialViewReduxContainer)
