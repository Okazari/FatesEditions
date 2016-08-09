import React from 'react'
import styles from './style.scss'

const Portal = ({ children }) => {
  return (
    <div className={styles.component}>
      {children}
    </div>
  )
}

export default Portal
