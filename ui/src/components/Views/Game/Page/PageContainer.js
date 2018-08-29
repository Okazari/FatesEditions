import { connect } from 'react-redux'
import Page from './Page'

const mapStateToProps = ({
  game,
}) => ({
  page: game.book.page[game.currentPageId],
})

export default connect(mapStateToProps)(Page)
