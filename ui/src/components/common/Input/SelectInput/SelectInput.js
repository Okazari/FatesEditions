import React from 'react'
import styles from './styles.scss'

const SelectInput = ({ domProps, children, label, placeholder }) => {
  return (
    <div className={styles.component}>
      {label && <label htmlFor={domProps.id}>{label}</label>}
      <select {...domProps}>
        {placeholder ? <option value="" disabled>{placeholder}</option> : ''}
        {children}
      </select>
    </div>
  )
}

export default SelectInput
