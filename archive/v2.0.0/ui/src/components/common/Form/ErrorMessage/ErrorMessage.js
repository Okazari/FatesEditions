import React from 'react'
import styles from './style.scss'

const ErrorMessage = ({ children }) => (
  <div className={styles.error}>
    {children}
  </div>
)

export default ErrorMessage
