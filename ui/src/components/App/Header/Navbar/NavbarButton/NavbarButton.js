import React from 'react'
import styles from './style.scss'
import classnames from 'classnames'

const NavbarButton = ({ children }) => {
  const className = classnames(
    'divider',
    styles.component
  )
  return (
    <li className={className}>
      <a>{children}<span className="sr-only"></span></a>
    </li>
  )
}

export default NavbarButton
