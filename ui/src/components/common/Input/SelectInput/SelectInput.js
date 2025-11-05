import React from 'react'
import classnames from 'classnames'
import styles from './styles.scss'

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
