import React from 'react'
import {
  DisplayStats,
  DisplayObjects,
  Toolbar,
  ToolbarTop,
  ToolbarBottom,
  ToolbarLogo,
  ExitButton,
} from '../common'
import styles from './style.scss'

const TrialToolbar = () => {
  return (
    <Toolbar className={styles.component}>
      <ToolbarTop>
        <ToolbarLogo white />
        <DisplayStats />
        <DisplayObjects />
      </ToolbarTop>
      <ToolbarBottom>
        <ExitButton />
      </ToolbarBottom>
    </Toolbar>
  )
}

export default TrialToolbar
