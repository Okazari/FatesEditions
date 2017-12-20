import React from 'react'
import classnames from 'classnames'
import DataHeader from './DataHeader'
import DataBody from './DataBody'
import styles from './styles.scss'

const DataTable = ({ children, headers, className }) => {
  const finalClasses = classnames(className, styles.component)
  return (
    <div className={finalClasses}>
      <DataHeader headers={headers} />
      <DataBody>{children}</DataBody>
    </div>
  )
}

export default DataTable
