import React from 'react'
import { RouteService } from 'services'
import styles from './style.scss'
import logo from '../common/logo.svg'

const Portal = ({ children }) => {
  return (
    <div className={styles.component}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <img
            onClick={() => RouteService.goTo(RouteService.routes.home())}
            alt="logo"
            src={logo}
          />
        </div>
        {children}
      </div>
    </div>
  )
}

export default Portal
