import React from 'react'
import styles from './styles.scss'

const TextAreaInput = ({ domProps, label }) => {
  return (
    <div className={styles.component}>
      <label htmlFor={domProps.id}>{label}</label>
      <textarea
        {...domProps}
      />
    </div>
  )
}

export default TextAreaInput
