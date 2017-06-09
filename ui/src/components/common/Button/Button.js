import React from 'react'
import styles from './styles.scss'
import classnames from 'classnames'

const Button = ({ children, className, domProps }) => {
  const finalClassName = classnames('btn btn-primary', styles.component, className)
  return (
    <button {...domProps} className={finalClassName} > {children} </button>
  )
}

export default Button
