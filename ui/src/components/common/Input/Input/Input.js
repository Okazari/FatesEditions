import React from 'react'
import classnames from 'classnames'
import styles from './styles.scss'

const Input = ({ domProps, label, className }) => {
  const finalClassName = classnames(styles.component, className)
  return (
    <div className={finalClassName}>
      {label && <label htmlFor={domProps.id}>{label}</label>}
      <input {...domProps} />
    </div>
  )
}

export default Input
