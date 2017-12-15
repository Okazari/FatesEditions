import React from 'react'
import { Layout, Content, Toolbar, Tabs } from '../Layout'
import { RouteService } from '../../services'

const MyBooks = ({ location, children, params }) => {
  const tabInfos = { label: 'Général', link: RouteService.routes.writebookgeneral(params.draftId) }
  const tabStats = { label: 'Statistiques', link: RouteService.routes.writebookstats(params.draftId) }
  const tabItems = { label: 'Objets et compétences', link: RouteService.routes.writebookitems(params.draftId) }
  const tabPages = { label: 'Pages', link: RouteService.routes.writebookpages(params.draftId) }
  const tabs = [tabInfos, tabStats, tabItems, tabPages]
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

export default MyBooks
