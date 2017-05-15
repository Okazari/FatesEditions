import React from 'react'
import styles from './styles.scss'

const SelectInput = ({injectedProps, domProps, children, label, placeholder}) => {
  return (
    <div className={styles.component}>
      <label>{label}</label>
      <select className={styles.component} {...domProps} value={injectedProps.inputValue} onChange={injectedProps.updateInput}>
        {placeholder ? <option value="" disabled>{placeholder}</option> : ""}
        {children}
      </select>
    </div>
  )
}

export default SelectInput
