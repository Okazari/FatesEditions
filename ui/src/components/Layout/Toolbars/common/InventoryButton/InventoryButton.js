import React from 'react'
import { ToolbarButton } from 'components/common'

const InventoryButton = ({ panelIsOpen, onClick }) => (
  <div onClick={() => onClick(!panelIsOpen)}>
    <ToolbarButton
      icon="business_center"
      dark
    />
  </div>
)

export default InventoryButton
