import React from 'react'
import logo from 'components/common/logo.svg'
import styles from './style.scss'

const Loader = () => (
  <div className={styles.component}>
    <img
      className={styles.logo}
      alt="logo"
      src={logo}
    />
  </div>
)

export default Loader
