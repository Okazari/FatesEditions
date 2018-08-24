import { connect } from 'react-redux'
import { panelState } from 'redux/actions'
import InventoryButton from './InventoryButton'

const mapStateToProps = (state) => {
  const { panelIsOpen } = state.ui
  return { panelIsOpen }
}

const mapDispatchToProps = (dispatch) => {
  const onClick = bool => dispatch(panelState(bool))
  return {
    onClick,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InventoryButton)
