import { connect } from 'react-redux'
import { switchPanel } from 'redux/actions'
import GameToolbar from './GameToolbar'

const mapStateToProps = ({ ui: { panelState } }) => ({ panelState })

const mapDispatchToProps = dispatch => ({
  switchPanel: key => dispatch(switchPanel(key)),
})

export default connect(mapStateToProps, mapDispatchToProps)(GameToolbar)
