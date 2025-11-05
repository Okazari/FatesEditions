import React from 'react'
import styles from './styles.scss'

const DataRow = ({ children }) => {
  return (
    <div className={styles.component}>
      {children}
    </div>
  )
}

export default DataRow
