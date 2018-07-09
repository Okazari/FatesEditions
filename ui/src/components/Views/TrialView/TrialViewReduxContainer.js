import React from 'react'
import { normalize } from 'normalizr'
import { connect } from 'react-redux'
import { book } from 'redux/schema'
import { setGame, initBook } from 'redux/actions'
import TrialView from './TrialView'

const TrialViewReduxContainer = (props) => {
  const normalizedBook = normalize(props.game.book, book)
  const newGameState = { ...props.game }
  delete newGameState.book
  props.dispatch(initBook(normalizedBook.entities))
  props.dispatch(setGame(newGameState))
  return <TrialView />
}

export default connect()(TrialViewReduxContainer)
