import React from 'react'
import { Layout, Content, Toolbar, Tabs, TabContent } from 'components/Layout'
import { RouteService } from 'services'

const WritePage = ({ location, children, params }) => {
  const tabPrevious = { label: 'Retour au livre', link: RouteService.routes.writebook(params.draftId) }
  const tabInfos = { label: 'Général', link: RouteService.routes.writebookpagegeneral(params.draftId, params.pageId) }
  const tabContent = { label: 'Contenu', link: RouteService.routes.writebookpagecontent(params.draftId, params.pageId) }
  const tabTransitions = { label: 'Choix', link: RouteService.routes.writebookpagetransitions(params.draftId, params.pageId) }
  const tabs = [tabPrevious, tabInfos, tabContent, tabTransitions]
  return (
    <Layout>
      <Toolbar />
      <Content>
        <Tabs tabs={tabs} selectedTab={location.pathname} />
        <TabContent>
          {children}
        </TabContent>
      </Content>
    </Layout>
  )
}

export default WritePage
