import React from 'react'
import RowInput from '../RowInput'
import styles from './styles.scss'

const GroupInput = ({ children, label, injectedProps, domProps }) => {
  return (
    <div>
      {label !== null ? <label htmlFor={domProps.id}>{label}</label> : null}
      <div className={styles.component}>
        {children}
        <RowInput domProps={domProps} injectedProps={injectedProps} />
      </div>
    </div>
  )
}

export default GroupInput
