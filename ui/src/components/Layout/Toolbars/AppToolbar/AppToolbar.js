import React from 'react'
import ToolbarLink, { ToolbarButton } from 'components/common/ToolbarLink'
import styles from './style.scss'
import logo from '../../../common/logo.svg'
import { RouteService } from '../../../../services'

const AppToolbar = () => {
  return (
    <div className={styles.component}>
      <div className={styles.top}>
        <img className={styles.logo} alt="logo" src={logo} />
        <ToolbarLink to={RouteService.routes.books()} icon="import_contacts" />
        <ToolbarLink to={RouteService.routes.write()} icon="mode_edit" />
        <ToolbarLink to={RouteService.routes.continue()} icon="play_arrow" />
      </div>
      <div className={styles.bottom}>
        <ToolbarLink to={RouteService.routes.profile()} icon="account_circle" />
        <div 
          onClick={() => {
            localStorage.removeItem('auth-token')
            RouteService.goTo(RouteService.routes.signin())
          }}
        >
        <ToolbarButton icon="power_settings_new" />
        </div>
      </div>
    </div>
  )
}

export default AppToolbar
