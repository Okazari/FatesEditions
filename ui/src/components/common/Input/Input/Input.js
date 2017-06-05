import React from 'react'
import styles from './styles.scss'

const Input = ({ injectedProps, domProps, label }) => {
  return (
    <div className={styles.component}>
      <label htmlFor={domProps.id}>{label}</label>
      <input {...domProps} className={styles.input} />
    </div>
  )
}

export default Input
