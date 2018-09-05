import { connect } from 'react-redux'
import TransitionsList from './TransitionsList'

const mapStateToProps = ({ game }) => ({
  transitions: game.book.page[game.currentPageId].transitions,
})

export default connect(mapStateToProps)(TransitionsList)
