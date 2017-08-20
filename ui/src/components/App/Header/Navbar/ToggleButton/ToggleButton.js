import React from 'react'
import classnames from 'classnames'
import styles from './style.scss'

const ToggleButton = () => {
  const className = classnames(
    'sidebar-toggle',
    styles.component,
  )
  return (
    <a id="menu-togglemenu" className={className}>
      <span className="sr-only">Menu</span>
      <span className="icon-bar" />
      <span className="icon-bar" />
      <span className="icon-bar" />
    </a>
  )
}

export default ToggleButton
