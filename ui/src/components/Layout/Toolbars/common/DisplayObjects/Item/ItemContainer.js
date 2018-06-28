import { connect } from 'react-redux'
import Item from './Item'

const mapStateToProps = ({ game }, { objectId }) => ({
  name: game.book.object[objectId].name,
})

export default connect(mapStateToProps)(Item)
