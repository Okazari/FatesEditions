import React from 'react'
import styles from './style.scss'
import logo from '../../common/logo.svg'
import Link from './Link'
import { RouteService } from '../../../services'

const Toolbar = () => {
  return (
    <div className={styles.component}>
      <img className={styles.logo} alt="logo" src={logo} />
      <Link to={RouteService.routes.books()} icon="import_contacts" />
      <Link to={RouteService.routes.write()} icon="mode_edit" />
      <Link to={RouteService.routes.profile()} icon="account_circle" />
    </div>
  )
}

export default Toolbar
