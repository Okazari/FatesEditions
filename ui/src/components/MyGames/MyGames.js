import React from 'react'
import { Layout, Content, AppToolbar, Tabs } from 'components/Layout'
import { RouteService } from 'services'


const tabGames = { label: 'Parties en cours', link: RouteService.routes.mygameslist() }
const tabs = [tabGames]

const MyGames = ({ location, children }) => (
  <Layout>
    <AppToolbar />
    <Content>
      <Tabs tabs={tabs} selectedTab={location.pathname} />
      {children}
    </Content>
  </Layout>
)

export default MyGames
