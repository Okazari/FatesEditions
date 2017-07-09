import React from 'react'
import styles from './style.scss'

const Toolbar = ({ children }) => {
  return (
    <div className={styles.component}>
      {children}
    </div>
  )
}

export default Toolbar
