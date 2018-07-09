import React from 'react'
import { Layout, Content, AppToolbar, Tabs } from 'components/Layout'
import { RouteService } from 'services'


const tabGames = { label: 'Parties en cours', link: RouteService.routes.continuelist() }
const tabs = [tabGames]

const Continue = ({ location, children }) => (
  <Layout>
    <AppToolbar />
    <Content>
      <Tabs tabs={tabs} selectedTab={location.pathname} />
      {children}
    </Content>
  </Layout>
)

export default Continue