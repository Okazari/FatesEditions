import React from 'react'
import styles from './style.scss'

const Portal = ({ children }) => {
  return (
    <div className={styles.component}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <img alt="logo" src="https://myvirtualstorybook.com/app/images/logo/logo300x300.png" />
          MyVirtualStoryBook
        </div>
        {children}
      </div>
    </div>
  )
}

export default Portal
