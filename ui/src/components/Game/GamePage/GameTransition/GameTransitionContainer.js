import { connect } from 'react-redux'
import { changeGameState } from 'redux/actions'
import GameTransition from './GameTransition'

const mapStateToProps = ({ game }, { transitionId }) => {
  const transition = game.book.transition[transitionId]
  const pageEffects = game.book.page[transition.toPage].effects
  return {
    transition: {
      ...transition,
      conditions: transition.conditions.map(id => game.book.condition[id]),
      effects: transition.effects.map(id => game.book.effect[id]),
    },
    stats: game.stats,
    objects: game.objects,
    pageEffects: pageEffects.map(id => game.book.effect[id]),
  }
}

const mapDispatchToProps = dispatch => ({
  changeGameState: newGameState => dispatch(changeGameState(newGameState)),
})

export default connect(mapStateToProps, mapDispatchToProps)(GameTransition)
