import React from 'react'
import styles from './style.scss'

const NewLayout = ({ children }) => {
  return (
    <div className={styles.component}>
      {children}
    </div>
  )
}

export default NewLayout
