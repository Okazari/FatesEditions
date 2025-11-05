import React from 'react'
import styles from './styles.scss'

const DataBody = ({ children }) => {
  return (
    <div className={styles.component}>
      {children}
    </div>
  )
}

export default DataBody
