import { connect } from 'react-redux'
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
  let errors = []
  try {
    visible = GameService.checkTransitionVisibility(mappedTransition)
  } catch(error) {
    errors.push(error)
  }

  return {
    transitionId,
    visible,
    errors,
    text,
  }
}

export default connect(mapStateToProps)(GameTransition)
