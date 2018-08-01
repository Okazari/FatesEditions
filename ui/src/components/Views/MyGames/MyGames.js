import React from 'react'
import { AppLayout } from 'components/common'
import { RouteService } from 'services'

const tabGames = { label: 'Parties en cours', link: RouteService.routes.mygameslist() }
const tabs = [tabGames]

const MyGames = props => <AppLayout {...props} tabs={tabs} />

export default MyGames
