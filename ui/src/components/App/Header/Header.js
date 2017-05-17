import React from 'react'
import classnames from 'classnames'
import styles from './style.scss'
import Navbar from './Navbar'

const Header = () => {
  const headerClassName = classnames(
    'main-header',
    styles.component,
  )
  const logoClassName = classnames(
    'logo',
    styles.logo,
  )
  return (
    <header className={headerClassName}>
      <a className={logoClassName}>
        <img alt="logo" className={styles.logoHeader} src="https://myvirtualstorybook.com/app/images/logo.png" />
        <b style={{ fontSize: '0.8em' }}>MyVirtualStoryBook</b>
      </a>
      <Navbar />
    </header>
  )
}

export default Header
