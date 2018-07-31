import React from 'react'
import { Button } from 'components/common'
import { AuthService, RouteService } from 'services'
import styles from './style.scss'

const Disconnect = () => (
  <div className={styles.component}>
    <div className={styles.message}>
      Voulez vous vraiment vous déconnecter ?
    </div>
    <Button
      domProps={{
        onClick: () => AuthService.logout()
          .then(() => RouteService.goTo(RouteService.routes.connection())),
      }}
    >
      {'Déconnexion'}
    </Button>
  </div>
)

export default Disconnect
