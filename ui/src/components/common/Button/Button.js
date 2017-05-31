import React from 'react'
import styles from './styles.scss'

const Button = ({ children, className = '', domProps }) => {
  return (
    <button {...domProps} className={`btn btn-primary ${styles.component} ${className}`} > {children} </button>
  )
}

export default Button
