import React from 'react'
import { Icon } from 'components/common'
import styles from './style.scss'

const ToolbarButton = ({ icon }) => {
  return (
    <div className={styles.link}>
      <Icon domProps={{ className: styles.icon }} icon={icon} />
    </div>
  )
}

export default ToolbarButton
