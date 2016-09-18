import React from 'react'
import styles from './style.scss'
import Navbar from './Navbar'
import classnames from 'classnames'

const Header = () => {
  const headerClassName = classnames(
    'main-header',
    styles.component
  )
  const logoClassName = classnames(
    'logo',
    styles.logo
  )
  return (
    <header className={headerClassName}>
      <a className={logoClassName}>
        <img role="presentation" className={styles.logoHeader} src="https://myvirtualstorybook.com/app/images/logo.png" />
        <b style={{fontSize:"0.8em"}}>MyVirtualStoryBook</b>
      </a>
      <Navbar />      
    </header>
  )
}

export default Header
