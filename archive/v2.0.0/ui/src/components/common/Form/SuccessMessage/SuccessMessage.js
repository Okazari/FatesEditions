import React from 'react'
import styles from './style.scss'

const SuccessMessage = ({ children }) => (
  <div className={styles.success}>
    {children}
  </div>
)

export default SuccessMessage
