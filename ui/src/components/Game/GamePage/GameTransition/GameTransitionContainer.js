import { connect } from 'react-redux'
import { changeGameState } from 'redux/actions'
import GameTransition from './GameTransition'

const mapStateToProps = ({ game }, { transitionId }) => {
  const transition = game.book.transition[transitionId]
  return {
    transition: {
      ...transition,
      conditions: transition.conditions.map(id => game.book.condition[id]),
      effects: transition.effects.map(id => game.book.effect[id]),
    },
    stats: game.stats,
    objects: game.objects,
  }
}

const mapDispatchToProps = dispatch => ({
  changeGameState: newGameState => dispatch(changeGameState(newGameState)),
})

export default connect(mapStateToProps, mapDispatchToProps)(GameTransition)
