import React from 'react'
import { connect } from 'react-redux'
import { setGame, setBook } from 'redux/actions'
import TrialView from './TrialView'

class TrialViewReduxContainer extends React.Component {
  shouldComponentUpdate(nextProps) {
    return this.props.game.id !== nextProps.game.id
  }

  render() {
    const newGameState = { ...this.props.game }
    delete newGameState.book
    this.props.dispatch(setBook(this.props.game.book))
    this.props.dispatch(setGame(newGameState))
    return <TrialView />
  }
}

export default connect()(TrialViewReduxContainer)
