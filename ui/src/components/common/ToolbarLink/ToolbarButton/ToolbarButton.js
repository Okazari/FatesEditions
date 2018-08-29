import React from 'react'
import classnames from 'classnames'
import { Icon } from 'components/common'
import styles from './style.scss'

const ToolbarButton = ({ domProps, icon, dark, selected }) => {
  const className = classnames(
    dark && styles.dark,
    selected && styles.selected,
    domProps && domProps.className,
    styles.icon,
  )
  return (
    <div className={styles.link}>
      <Icon domProps={{ className }} icon={icon} />
    </div>
  )
}

export default ToolbarButton
