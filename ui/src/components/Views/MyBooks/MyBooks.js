import React from 'react'
import { AppLayout } from 'components/common'
import { RouteService } from 'services'

const tabDrafts = { label: 'Mes brouillons', link: RouteService.routes.writedrafts() }
const tabBooks = { label: 'Mes livres publiés', link: RouteService.routes.writepublications() }
const tabPublish = { label: 'Publier un livre', link: RouteService.routes.writepublish() }
const tabs = [tabDrafts, tabBooks, tabPublish]

const MyBooks = props => <AppLayout {...props} tabs={tabs} />

export default MyBooks
