import React from 'react'
import { AppLayout } from 'components/common'
import { RouteService } from 'services'

const tabDrafts = { label: 'Mes brouillons', link: RouteService.routes.writedrafts() }
const tabBooks = { label: 'Mes livres publiés', link: RouteService.routes.writepublications() }
const tabs = [tabDrafts, tabBooks]

const MyBooks = props => <AppLayout {...props} tabs={tabs} />

export default MyBooks
