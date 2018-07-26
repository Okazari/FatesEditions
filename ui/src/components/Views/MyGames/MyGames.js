import React from 'react'
import { Layout, Content, AppToolbar, Tabs, TabContent } from 'components/Layout'
import { RouteService } from 'services'

const tabGames = { label: 'Parties en cours', link: RouteService.routes.mygameslist() }
const tabs = [tabGames]

const MyGames = ({ location, children }) => (
  <Layout>
    <AppToolbar location={location.pathname} />
    <Content>
      <Tabs tabs={tabs} selectedTab={location.pathname} />
      <TabContent>
        {children}
      </TabContent>
    </Content>
  </Layout>
)

export default MyGames
