import { connect } from 'react-redux'
import { withStateHandlers } from 'recompose'
import Item from './Item'

const mapStateToProps = ({ game }, { itemId }) => ({
  item: game.book.object[itemId],
})

const ItemContainer = withStateHandlers(
  {
    descriptionVisible: false,
  },
  {
    toggleDescription: ({ descriptionVisible }) =>
      () => ({ descriptionVisible: !descriptionVisible }),
  },
)(Item)

export default connect(mapStateToProps)(ItemContainer)
