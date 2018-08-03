import React from 'react'
import { browserHistory } from 'react-router'
import { ToolbarButton } from 'components/common/ToolbarLink'
import styles from './style.scss'

const ExitButton = () => (
  <div onClick={browserHistory.goBack}>
    <ToolbarButton
      domProps={{ className: styles.darkButton }}
      icon="exit_to_app"
    />
  </div>
)

export default ExitButton
