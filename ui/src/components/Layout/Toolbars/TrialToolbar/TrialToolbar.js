import React from 'react'
import {
  Toolbar,
  ToolbarTop,
  ToolbarBottom,
  ToolbarLogo,
  InventoryButton,
  ExitButton,
} from '../common'
import styles from './style.scss'

const TrialToolbar = () => {
  return (
    <Toolbar className={styles.component}>
      <ToolbarTop>
        <ToolbarLogo white />
        <InventoryButton />
      </ToolbarTop>
      <ToolbarBottom>
        <ExitButton />
      </ToolbarBottom>
    </Toolbar>
  )
}

export default TrialToolbar
