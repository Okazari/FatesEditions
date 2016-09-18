import React from 'react'
import styles from './style.scss'
import classnames from 'classnames'

const ToggleButton = () => {
  const className = classnames(
    'sidebar-toggle',
    styles.component
  )
  return (
    <a id="menu-togglemenu" className={className}>
      <span className="sr-only">Menu</span>
      <span className="icon-bar"></span>
      <span className="icon-bar"></span>
      <span className="icon-bar"></span>
    </a>
  ) 
}

export default ToggleButton
