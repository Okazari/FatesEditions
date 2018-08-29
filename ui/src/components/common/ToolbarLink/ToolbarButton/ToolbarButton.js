import React from 'react'
import classnames from 'classnames'
import { Icon } from 'components/common'
import styles from './style.scss'

const ToolbarButton = ({ domProps, iconDomProps, icon, dark, selected }) => {
  const className = classnames(
    dark && styles.dark,
    selected && styles.selected,
    iconDomProps && iconDomProps.className,
    styles.icon,
  )
  return (
    <div {...domProps} className={styles.link}>
      <Icon domProps={{ ...iconDomProps, className }} icon={icon} />
    </div>
  )
}

export default ToolbarButton
