import React from 'react'
import ToolbarLink, { ForbiddenLink } from 'components/common/ToolbarLink'
import { Connected, Disconnected } from 'components/common/Authentication'
import { RouteService } from 'services'
import { Toolbar, ToolbarTop, ToolbarBottom, ToolbarLogo } from '../common'

const AppToolbar = ({ location }) => {
  return (
    <Toolbar>
      <ToolbarTop>
        <ToolbarLogo
          onClick={() => RouteService.goTo(RouteService.routes.home())}
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
      </ToolbarTop>
      <ToolbarBottom>
        <Connected>
          <ToolbarLink to={RouteService.routes.profile()} icon="account_circle" location={location} />
        </Connected>
        <Disconnected>
          <ToolbarLink to={RouteService.routes.connection()} icon="power_settings_new" location={location} />
        </Disconnected>
      </ToolbarBottom>
    </Toolbar>
  )
}

export default AppToolbar
