import React from 'react'
import styles from './styles.scss'

const GroupInput = ({ children, label, domProps }) => {
  return (
    <div>
      {label && <label htmlFor={domProps.id}>{label}</label>}
      <div className={styles.component}>
        {children}
        <input {...domProps} />
      </div>
    </div>
  )
}

export default GroupInput
