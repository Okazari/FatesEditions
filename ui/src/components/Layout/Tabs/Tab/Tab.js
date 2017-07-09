import React from 'react'
import classnames from 'classnames/bind'
import styles from './styles.scss'

const cx = classnames.bind(styles)

const Tab = ({ label, domProps, selected }) => {
  const selectedClass = cx(styles.tracker, {
    selected,
  })
  return (
    <div {...domProps} className={styles.component}>
      {label}
      <div className={selectedClass} />
    </div>
  )
}

export default Tab
