import React from 'react'
import { AppLayout } from 'components/common'
import { RouteService } from 'services'

const WriteDraft = (props) => {
  const { params } = props
  const tabPrevious = { label: 'Retour aux brouillons', link: RouteService.routes.writedrafts() }
  const tabInfos = { label: 'Mon brouillon', link: RouteService.routes.writebookgeneral(params.draftId) }
  const tabStats = { label: 'Statistiques', link: RouteService.routes.writebookstats(params.draftId) }
  const tabItems = { label: 'Objets et compétences', link: RouteService.routes.writebookitems(params.draftId) }
  const tabPages = { label: 'Pages', link: RouteService.routes.writebookpages(params.draftId) }
  const tabs = [tabPrevious, tabInfos, tabStats, tabItems, tabPages]
  return <AppLayout {...props} tabs={tabs} />
}

export default WriteDraft
