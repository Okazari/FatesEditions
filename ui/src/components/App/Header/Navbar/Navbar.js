import React from 'react'
import { browserHistory } from 'react-router'
import ToggleButton from './ToggleButton'
import NavbarButton from './NavbarButton'
import { AuthService } from '../../../../services'

const onLogout = () => {
  AuthService.logout().then(() => {
    browserHistory.push('/app/portal/signin')
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
