import { connect } from 'react-redux'
import TransitionsList from './TransitionsList'

const mapStateToProps = ({ game }) => ({
  transitions: game.book.page[game.currentPageId].transitions,
  rolls: game.book.page[game.currentPageId].rolls,
  stats: game.stats,
})

export default connect(mapStateToProps)(TransitionsList)
