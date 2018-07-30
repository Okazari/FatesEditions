import React from 'react'
import ToolbarLink, { ToolbarButton } from 'components/common/ToolbarLink'
import { Connected, Disconnected } from 'components/common/Authentication'
import { RouteService, AuthService } from 'services'
import logo from 'components/common/logo.svg'
import styles from './style.scss'

const AppToolbar = ({ location }) => {
  return (
    <div className={styles.component}>
      <div className={styles.top}>
        <img
          onClick={() => RouteService.goTo(RouteService.routes.home())}
          className={styles.logo}
          alt="logo"
          src={logo}
        />
        <ToolbarLink to={RouteService.routes.books()} icon="import_contacts" location={location} />
        <ToolbarLink to={RouteService.routes.write()} icon="mode_edit" location={location} />
        <ToolbarLink to={RouteService.routes.mygames()} icon="play_arrow" location={location} />
      </div>
      <Connected>
        <div className={styles.bottom}>
          <ToolbarLink to={RouteService.routes.profile()} icon="account_circle" location={location} />
          <div
            onClick={() => {
              AuthService.removeToken()
              RouteService.goTo(RouteService.routes.signin())
            }}
          >
            <ToolbarButton icon="power_settings_new" />
          </div>
        </div>
      </Connected>
      <Disconnected>
        <div className={styles.bottom}>
          <ToolbarLink to={RouteService.routes.connection()} icon="power_settings_new" location={location} />
        </div>
      </Disconnected>
    </div>
  )
}

export default AppToolbar
