import React from 'react'
import { AppLayout } from 'components/common'
import { RouteService } from 'services'
import Forbidden from './Forbidden'
import styles from './style.scss'

const tabDrafts = { label: 'Mes brouillons', link: RouteService.routes.writedrafts() }
const tabBooks = { label: 'Mes livres publiés', link: RouteService.routes.writepublications() }
const tabs = [tabDrafts, tabBooks]

const MyBooks = props => (
  <div>
    <div className={styles.app}>
      <AppLayout {...props} tabs={tabs} />
    </div>
    <div className={styles.forbidden}>
      <Forbidden {...props} />
    </div>
  </div>
)


export default MyBooks
