import { connect } from 'react-redux'
import { switchPanel } from 'redux/actions'
import ExitButton from './ExitButton'

const mapStateToProps = ({ ui: { panelState } }) => ({ panelState })

const mapDispatchToProps = (dispatch) => {
  const closePanel = () => dispatch(switchPanel(null))
  return {
    closePanel,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExitButton)
