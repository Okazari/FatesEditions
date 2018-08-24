import { connect } from 'react-redux'
import Item from './Item'

const mapStateToProps = ({ game }, { objectId }) => ({
  item: game.book.object[objectId],
})

export default connect(mapStateToProps)(Item)
