import { connect } from 'react-redux'
import Game from './Game'

const mapStateToProps = ({
  ui: {
    panelState,
  },
}) => ({ panelState })

export default connect(mapStateToProps)(Game)
