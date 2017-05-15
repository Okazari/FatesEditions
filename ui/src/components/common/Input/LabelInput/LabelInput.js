import React from 'react'
import RowInput from '../RowInput'
import styles from './styles.scss'

const LabelInput = ( {injectedProps, domProps, label} ) => {
  return (
    <div className={styles.component}>
      <label>{label}</label>
      <RowInput injectedProps={injectedProps} domProps={domProps} />
    </div>
  )
}

export default LabelInput
