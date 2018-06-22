import { connect } from 'react-redux'
import GamePage from './GamePage'

const mapStateToProps = ({ game }) => ({ page: game.book.page[game.currentPageId] })

export default connect(mapStateToProps)(GamePage)
