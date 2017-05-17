import React from 'react'
import styles from './styles.scss'

const SelectInput = ({ injectedProps, domProps, children, label, placeholder }) => {
  return (
    <div className={styles.component}>
      <label htmlFor={domProps.id}>{label}</label>
      <select
        className={styles.component}
        value={injectedProps.inputValue}
        onChange={injectedProps.updateInput}
        {...domProps}
      >
        {placeholder ? <option value="" disabled>{placeholder}</option> : ''}
        {children}
      </select>
    </div>
  )
}

export default SelectInput
