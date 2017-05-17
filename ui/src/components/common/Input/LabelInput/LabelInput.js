/* eslint-disable jsx-a11y/label-has-for */
import React from 'react'
import RowInput from '../RowInput'
import styles from './styles.scss'

const LabelInput = ({ injectedProps, domProps, label }) => {
  return (
    <div className={styles.component}>
      <label htmlFor={domProps.id}>{label}</label>
      <RowInput injectedProps={injectedProps} domProps={domProps} />
    </div>
  )
}

export default LabelInput
