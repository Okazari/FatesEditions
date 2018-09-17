import { connect } from 'react-redux'
import TransitionsList from './TransitionsList'

const mapStateToProps = ({ game }) => ({
  transitions: game.book.page[game.currentPageId].transitions,
  page: game.book.page[game.currentPageId],
  stats: game.stats,
})

export default connect(mapStateToProps)(TransitionsList)
