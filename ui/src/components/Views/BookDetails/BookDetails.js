import React from 'react'
import { RouteService } from 'services'
import { AppLayout } from 'components/common'

const tabNews = { label: 'Nouveautés', link: RouteService.routes.booksnews() }
const tabLibrary = { label: 'Bibliothèque', link: RouteService.routes.bookslibrary() }
const tabs = [tabNews, tabLibrary]

const BookDetails = (props) => {
  return <AppLayout {...props} tabs={tabs} />
}

export default BookDetails
