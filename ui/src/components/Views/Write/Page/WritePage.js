import React from 'react'
import { Layout, Content, AppToolbar, Tabs, TabContent } from 'components/Layout'
import { RouteService } from 'services'

const WritePage = ({ location, loading, children, params }) => {
  const tabPrevious = { label: 'Retour au livre', link: RouteService.routes.writebookpages(params.draftId) }
  const tabInfos = { label: 'Général', link: RouteService.routes.writebookpagegeneral(params.draftId, params.pageId) }
  const tabContent = { label: 'Contenu', link: RouteService.routes.writebookpagecontent(params.draftId, params.pageId) }
  const tabTransitions = { label: 'Choix', link: RouteService.routes.writebookpagetransitions(params.draftId, params.pageId) }
  const tabs = [tabPrevious, tabInfos, tabContent, tabTransitions]
  return (
    <Layout>
      <AppToolbar location={location.pathname} />
      <Content>
        <Tabs tabs={tabs} selectedTab={location.pathname} />
        <TabContent>
          {!loading && children}
        </TabContent>
      </Content>
    </Layout>
  )
}

export default WritePage
