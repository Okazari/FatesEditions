import React from 'react'
import classnames from 'classnames'
import { Icon } from 'components/common'
import styles from './style.scss'

const ToolbarButton = ({ domProps, iconDomProps, icon, dark, selected }) => {
  const className = classnames(
    styles.icon,
    {
      [styles.dark]: dark,
      [styles.selected]: selected,
      [iconDomProps && iconDomProps.className]: iconDomProps,
    },
  )
  return (
    <div {...domProps} className={styles.link}>
      <Icon domProps={{ ...iconDomProps, className }} icon={icon} />
    </div>
  )
}

export default ToolbarButton
