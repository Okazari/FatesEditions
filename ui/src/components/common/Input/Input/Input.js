import React from 'react'
import styles from './styles.scss'

const Input = ({ domProps, label }) => {
  return (
    <div className={styles.component}>
      {label && <label htmlFor={domProps.id}>{label}</label>}
      <input {...domProps} className={styles.input} />
    </div>
  )
}

export default Input
