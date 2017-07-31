import React from 'react'
import styles from './style.scss'
import logo from '../common/logo.svg'

const Portal = ({ children }) => {
  return (
    <div className={styles.component}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <img alt="logo" src={logo} />
        </div>
        {children}
      </div>
    </div>
  )
}

export default Portal
