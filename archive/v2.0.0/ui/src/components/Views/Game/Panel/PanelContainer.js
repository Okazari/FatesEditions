import { connect } from 'react-redux'
import Panel from './Panel'

const mapStateToProps = ({
  ui: {
    panelState,
  },
}) => ({ panelState })

export default connect(mapStateToProps)(Panel)
