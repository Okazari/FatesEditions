import { connect } from 'react-redux'
import { panelState } from 'redux/actions'
import ExitButton from './ExitButton'

const mapStateToProps = ({ ui: { panelIsOpen } }) => ({ panelIsOpen })

const mapDispatchToProps = (dispatch) => {
  const closePanel = () => dispatch(panelState(false))
  return {
    closePanel,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExitButton)
