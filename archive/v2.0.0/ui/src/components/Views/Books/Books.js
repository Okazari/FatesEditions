import React from 'react'
import { AppLayout } from 'components/common'
import { RouteService } from 'services'

const tabNews = { label: 'Nouveautés', link: RouteService.routes.booksnews() }
const tabLibrary = { label: 'Bibliothèques', link: RouteService.routes.bookslibrary() }
const tabs = [tabNews, tabLibrary]

const Books = props => <AppLayout {...props} tabs={tabs} />

export default Books
