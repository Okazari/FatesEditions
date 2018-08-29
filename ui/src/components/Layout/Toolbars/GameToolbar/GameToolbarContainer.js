import { connect } from 'react-redux'
import { switchPanel } from 'redux/actions'
import GameToolbar from './GameToolbar'

const mapDispatchToProps = dispatch => ({
  switchPanel: key => dispatch(switchPanel(key)),
})

export default connect(null, mapDispatchToProps)(GameToolbar)
