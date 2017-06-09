import React from 'react'
import styles from './styles.scss'
import classnames from 'classnames'

const Input = ({ domProps, label, className }) => {
  const finalClassName = classnames(styles.component, className)
  return (
    <div className={finalClassName}>
      {label && <label htmlFor={domProps.id}>{label}</label>}
      <input {...domProps} className={styles.input} />
    </div>
  )
}

export default Input
