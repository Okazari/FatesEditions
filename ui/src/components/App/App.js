import React from 'react'
import styles from './style.scss'

const App = () => {
  return (
    <div className={`${styles.app} skin-blue sidebar-mini sidebar`}>
      <header className="main-header md-whiteframe-z2">
        <a className="logo"><img className="logo-header" src="https://myvirtualstorybook.com/app/images/logo.png" /><b style={{fontSize:"0.8em"}}>MyVirtualStoryBook</b></a>

        <nav className="navbar navbar-static-top">

          <a id="menu-togglemenu" className="sidebar-toggle" ng-click="toggleSlidebar(true)">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </a>
          <div className="navbar-custom-menu">
            <ul className="nav navbar-nav">
              <div className="container-fluid">
                <div className="collapse navbar-collapse" id="nav-bar-collapse">
                  <ul className="nav navbar-nav">
                    <li className="divider">
                      <a ng-click="logout()">Déconnexion<span className="sr-only"></span></a>
                    </li>
                  </ul>
                </div>
              </div>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default App
