import React from 'react'
import { panelState, statsOrItems } from 'redux/actions'
import { ToolbarButton } from 'components/common'

const DisplayStatsButton = ({ dispatch, panelIsOpen, displayStats }) => {
  const changeDisplay = () => {
    if (!panelIsOpen && !displayStats) {
      dispatch(panelState(true))
      dispatch(statsOrItems(true))
    } else if (panelIsOpen && !displayStats) {
      dispatch(statsOrItems(true))
    } else if (panelIsOpen && displayStats) {
      dispatch(panelState(false))
    } else if (!panelIsOpen && displayStats) {
      dispatch(panelState(true))
    }
  }
  return (
    <div onClick={() => changeDisplay()}>
      <ToolbarButton
        icon="equalizer"
        dark
      />
    </div>
  )
}
export default DisplayStatsButton
