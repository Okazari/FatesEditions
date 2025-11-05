import React from 'react'
import classnames from 'classnames'
import styles from './styles.scss'

const DataHeader = ({ headers = [] }) => {
  return (
    <div className={styles.component}>
      {
        headers.map((header) => {
          const className = classnames(styles.headerEntry, header.className)
          return <div key={header.key} className={className}>{header.type}</div>
        })
      }
    </div>
  )
}

export default DataHeader
