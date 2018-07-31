import React from 'react'
import ToolbarLink, { ForbiddenLink } from 'components/common/ToolbarLink'
import { Connected, Disconnected } from 'components/common/Authentication'
import { RouteService } from 'services'
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
        <Connected>
          <ToolbarLink to={RouteService.routes.books()} icon="import_contacts" location={location} />
          <ToolbarLink to={RouteService.routes.write()} icon="mode_edit" location={location} />
          <ToolbarLink to={RouteService.routes.mygames()} icon="play_arrow" location={location} />
        </Connected>
        <Disconnected>
          <ToolbarLink to={RouteService.routes.books()} icon="import_contacts" location={location} />
          <ForbiddenLink icon="mode_edit" />
          <ForbiddenLink icon="play_arrow" />
        </Disconnected>
      </div>
      <div className={styles.bottom}>
        <Connected>
          <ToolbarLink to={RouteService.routes.profile()} icon="account_circle" location={location} />
        </Connected>
        <Disconnected>
          <ToolbarLink to={RouteService.routes.connection()} icon="power_settings_new" location={location} />
        </Disconnected>
      </div>
    </div>
  )
}

export default AppToolbar
