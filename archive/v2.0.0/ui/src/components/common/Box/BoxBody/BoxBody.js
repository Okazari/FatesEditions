import React from 'react'
import styles from './styles.scss'

const BoxBody = ({ children, className }) => {
  let classes = `box-body ${styles.component}`
  if (className) classes += ` ${className}`
  return (
    <div className={classes}>
      {children}
    </div>
  )
}

export default BoxBody
