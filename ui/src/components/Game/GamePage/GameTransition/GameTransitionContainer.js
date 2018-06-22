import { connect } from 'react-redux'
import { changeGameState } from 'redux/actions'
import GameTransition from './GameTransition'

const mapStateToProps = ({ game }, { transitionId }) => ({
  transition: game.book.transition[transitionId],
})

const mapDispatchToProps = dispatch => ({
  changePage: currentPageId => dispatch(changeGameState({ currentPageId })),
})

export default connect(mapStateToProps, mapDispatchToProps)(GameTransition)
