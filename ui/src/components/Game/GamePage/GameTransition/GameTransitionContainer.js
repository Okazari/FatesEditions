import { bindActionCreators } from 'redux'
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

  if (!transition.toPage) {
    errors.push(new Error('Page de destination manquante'))
  }
  try {
    visible = GameService.checkTransitionVisibility(game, mappedTransition)
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
    setGame: bindActionCreators(setGame, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameTransition)
