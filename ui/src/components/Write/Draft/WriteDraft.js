import React from 'react'
import { Layout, Content, Toolbar, Tabs, TabContent } from 'components/Layout'
import { RouteService } from 'services'

const WriteDraft = ({ location, children, params, loading }) => {
  if (loading) return <div>Loading</div>
  const tabPrevious = { label: 'Retour aux brouillons', link: RouteService.routes.writedrafts() }
  const tabInfos = { label: 'Général', link: RouteService.routes.writebookgeneral(params.draftId) }
  const tabStats = { label: 'Statistiques', link: RouteService.routes.writebookstats(params.draftId) }
  const tabItems = { label: 'Objets et compétences', link: RouteService.routes.writebookitems(params.draftId) }
  const tabPages = { label: 'Pages', link: RouteService.routes.writebookpages(params.draftId) }
  const tabs = [tabPrevious, tabInfos, tabStats, tabItems, tabPages]
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

export default WriteDraft
