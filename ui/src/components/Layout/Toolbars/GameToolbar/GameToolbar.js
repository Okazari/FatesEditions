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
import logoWhite from '../../../common/logo_white.svg'

const GameToolbar = (props) => {
  return (
    <Toolbar className={styles.component}>
      <ToolbarTop>
        <ToolbarLogo logo={logoWhite} />
        <DisplayStats />
        <DisplayObjects />
      </ToolbarTop>
      <ToolbarBottom>
        <ExitButton />
      </ToolbarBottom>
    </Toolbar>
  )
}

export default GameToolbar
