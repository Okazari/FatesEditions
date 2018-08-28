import { connect } from 'react-redux'
import Game from './Game'

const mapStateToProps = ({
  ui: {
    displayStats,
    displayItems,
  },
}) => ({
  displayStats,
  displayItems,
})

export default connect(mapStateToProps)(Game)
