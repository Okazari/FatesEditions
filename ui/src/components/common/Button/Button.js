import React from 'react'
import classnames from 'classnames'
import styles from './styles.scss'

const Button = ({ children, className, domProps, disabled }) => {
  const finalClassName = classnames(styles.component, className)
  return <button {...domProps} className={finalClassName} disabled={disabled}>{children}</button>
}

export default Button
