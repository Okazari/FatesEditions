import React from 'react'
import RowInput from '../RowInput'
import styles from './styles.scss'

const GroupInput = ( { children, injectedProps, domProps } ) => {
  return (
    <div className={styles.component}>
      <span>{children}</span>
      <RowInput domProps={domProps} injectedProps={injectedProps} />
    </div>
  )
}

export default GroupInput
