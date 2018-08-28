import { connect } from 'react-redux'
import DisplayStatsButton from './DisplayStatsButton'

const mapStateToProps = ({
  ui: {
    panelIsOpen,
    displayStats,
  },
}) => ({
  panelIsOpen,
  displayStats,
})

export default connect(mapStateToProps)(DisplayStatsButton)
