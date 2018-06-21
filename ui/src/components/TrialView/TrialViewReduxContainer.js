import React from 'react'
import { normalize } from 'normalizr'
import { connect } from 'react-redux'
import * as schemas from 'redux/schema'
import * as actions from 'redux/actions'
import TrialView from './TrialView'

const StoreData = (props) => {
  const normalizedBook = normalize(props.game.book, schemas.book)
  const newGameState = { ...props.game }
  delete newGameState.book
  props.dispatch(actions.initBook(normalizedBook))
  props.dispatch(actions.changeGameState(newGameState))
  return <TrialView {...props} />
}

export default connect()(StoreData)
