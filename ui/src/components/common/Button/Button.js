import React from 'react'
import classnames from 'classnames'
import styles from './styles.scss'

const Button = ({ children, className, size, domProps }) => {
  const finalClassName = classnames(styles.component, className)
  return (
    <button {...domProps} className={finalClassName} > {children} </button>
  )
}

export default Button
