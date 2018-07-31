import React from 'react'
import styles from './style.scss'

const AlertMessage = ({ title, children }) => (
  <div className={styles.alertMessage}>
    <h4 className={styles.alertTitle}>
      {title}
    </h4>
    <div>
      {children}
    </div>
  </div>
)

export default AlertMessage
