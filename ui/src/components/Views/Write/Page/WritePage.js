import React from 'react'
import { AppLayout } from 'components/common'
import { RouteService } from 'services'

const WritePage = (props) => {
  const { params } = props
  const tabPrevious = { label: 'Retour au livre', link: RouteService.routes.writebookpages(params.draftId) }
  const tabInfos = { label: 'Général', link: RouteService.routes.writebookpagegeneral(params.draftId, params.pageId) }
  const tabContent = { label: 'Contenu', link: RouteService.routes.writebookpagecontent(params.draftId, params.pageId) }
  const tabTransitions = { label: 'Choix', link: RouteService.routes.writebookpagetransitions(params.draftId, params.pageId) }
  const tabs = [tabPrevious, tabInfos, tabContent, tabTransitions]
  return <AppLayout {...props} tabs={tabs} />
}

export default WritePage
