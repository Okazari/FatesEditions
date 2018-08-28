import { connect } from 'react-redux'
import DisplayItemsButton from './DisplayItemsButton'

const mapStateToProps = ({
  ui: {
    panelIsOpen,
    displayStats,
  },
}) => ({
  panelIsOpen,
  displayStats,
})

export default connect(mapStateToProps)(DisplayItemsButton)
