import { connect } from 'react-redux'
import { changeGameState } from 'redux/actions'
import GameTransition from './GameTransition'

const mapStateToProps = ({ game }, { transitionId }) => {
  const transition = game.book.transition[transitionId]
  const mappedTransition = {
    ...transition,
    conditions: transition.conditions.map(id => game.book.condition[id]),
    effects: transition.effects.map(id => game.book.effect[id]),
  }
  const pageEffects = transition.toPage
    ? game.book.page[transition.toPage].effects
    : []
  return {
    transition: mappedTransition,
    effects: [...mappedTransition.effects, ...pageEffects.map(id => game.book.effect[id])],
  }
}

const mapDispatchToProps = dispatch => ({
  changeGameState: newGameState => dispatch(changeGameState(newGameState)),
})

export default connect(mapStateToProps, mapDispatchToProps)(GameTransition)
