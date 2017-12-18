import React from 'react'
import { Layout, Content, Toolbar, Tabs } from 'components/Layout'
import { RouteService } from 'services'

const WritePage = ({ location, children, params }) => {
  const tabInfos = { label: 'Général', link: RouteService.routes.writebookpagegeneral(params.draftId, params.pageId) }
  const tabContent = { label: 'Contenu', link: RouteService.routes.writebookpagecontent(params.draftId, params.pageId) }
  const tabTransitions = { label: 'Choix', link: RouteService.routes.writebookpagetransitions(params.draftId, params.pageId) }
  const tabs = [tabInfos, tabContent, tabTransitions]
  return (
    <Layout>
      <Toolbar />
      <Content>
        <Tabs tabs={tabs} selectedTab={location.pathname} />
        {children}
      </Content>
    </Layout>
  )
}

export default WritePage
