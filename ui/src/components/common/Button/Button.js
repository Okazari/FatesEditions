import React from 'react'
import classnames from 'classnames'
import styles from './styles.scss'

const Button = ({ children, className, domProps }) => {
  const finalClassName = classnames('btn btn-primary', styles.component, className)
  return (
    <button {...domProps} className={finalClassName} > {children} </button>
  )
}

export default Button
