import React from 'react'
import styles from './styles.scss'

const SelectInput = ({ injectedProps, domProps, children, label, placeholder, className }) => {
  return (
    <div className={`${styles.component} ${className}`}>
      <label htmlFor={domProps.id}>{label}</label>
      <select
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
