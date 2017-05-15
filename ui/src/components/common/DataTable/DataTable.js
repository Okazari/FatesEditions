import React from 'react'
import DataHeader from './DataHeader'
import DataBody from './DataBody'
import styles from './styles.scss'

const DataTable = ({ children, headers, className }) => {
  return (
    <div className={styles.component}>
      <table className={`table dataTable ${className}`}>
        <DataHeader headers={headers}/>
        <DataBody>{children}</DataBody>
      </table>
    </div>
  )
}

export default DataTable
