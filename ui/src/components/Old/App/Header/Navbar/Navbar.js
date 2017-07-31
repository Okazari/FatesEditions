import React from 'react'
import ToggleButton from './ToggleButton'
import NavbarButton from './NavbarButton'
import { AuthService, RouteService } from '../../../../../services'

const onLogout = () => {
  AuthService.logout().then(() => {
    RouteService.goTo(RouteService.routes.signin())
  })
}

const Navbar = () => {
  return (
    <nav className="navbar navbar-static-top">
      <ToggleButton />
      <div className="navbar-custom-menu">
        <ul className="nav navbar-nav">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="nav-bar-collapse">
              <ul className="nav navbar-nav">
                <NavbarButton domProps={{ onClick: onLogout }}>Déconnexion</NavbarButton>
              </ul>
            </div>
          </div>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
