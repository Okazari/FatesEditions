import React from 'react'
import ToolbarLink, { ToolbarButton } from 'components/common/ToolbarLink'
import { Connected, Disconnected } from 'components/common/Authentication'
import { RouteService } from 'services'
import styles from './style.scss'
import logo from '../../../common/logo.svg'

const AppToolbar = () => (
  <div className={styles.component}>
    <div className={styles.top}>
      <img
        onClick={() => RouteService.goTo(RouteService.routes.home())}
        className={styles.logo}
        alt="logo"
        src={logo}
      />
      <ToolbarLink to={RouteService.routes.books()} icon="import_contacts" />
      <ToolbarLink to={RouteService.routes.write()} icon="mode_edit" />
      <ToolbarLink to={RouteService.routes.mygames()} icon="play_arrow" />
    </div>
    <Connected>
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
    </Connected>
    <Disconnected>
      <div className={styles.bottom}>
        <ToolbarLink to={RouteService.routes.signin()} icon="power_settings_new" />
      </div>
    </Disconnected>
  </div>
)

export default AppToolbar
