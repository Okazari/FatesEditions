import React from 'react'
import styles from './styles.scss'
import classnames from 'classnames'

const SelectInput = ({ domProps, children, label, placeholder, className }) => {
  const finalClassName = classnames(styles.component, className)
  return (
    <div className={finalClassName} >
      {label && <label htmlFor={domProps.id}>{label}</label>}
      <select {...domProps}>
        {placeholder ? <option value="" disabled>{placeholder}</option> : ''}
        {children}
      </select>
    </div>
  )
}

export default SelectInput
