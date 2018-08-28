import React from 'react'
import { panelState, statsOrItems } from 'redux/actions'
import { ToolbarButton } from 'components/common'

const DisplayItemsButton = ({ dispatch, panelIsOpen, displayStats }) => {
  const changeDisplay = () => {
    if (!panelIsOpen && displayStats) {
      dispatch(panelState(true))
      dispatch(statsOrItems(false))
    } else if (panelIsOpen && displayStats) {
      dispatch(statsOrItems(false))
    } else if (panelIsOpen && !displayStats) {
      dispatch(panelState(false))
    } else if (!panelIsOpen && !displayStats) {
      dispatch(panelState(true))
    }
  }
  return (
    <div onClick={() => changeDisplay()}>
      <ToolbarButton
        icon="business_center"
        dark
      />
    </div>
  )
}

export default DisplayItemsButton
