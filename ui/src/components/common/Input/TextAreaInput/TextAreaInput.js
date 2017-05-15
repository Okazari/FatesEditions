import React from 'react'
import styles from './styles.scss'

const TextAreaInput = ( {injectedProps, domProps, label} ) => {
  return (
    <div className={styles.component}>
      <label>{label}</label>
      <textarea value={injectedProps.inputValue} onChange={injectedProps.updateInput} {...domProps} />
    </div>
  )
}

export default TextAreaInput
