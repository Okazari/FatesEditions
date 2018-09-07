import React from 'react'
import classnames from 'classnames'
import styles from './style.scss'

const AlertMessage = ({ title, children, className }) => {
  const finalClassName = classnames(styles.alertMessage, className) 
  return (
    <div className={finalClassName}>
      <h4 className={styles.alertTitle}>
        {title}
      </h4>
      <div>
        {children}
      </div>
    </div>
  )
}
export default AlertMessage
