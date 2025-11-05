import React from 'react'
import { Layout, Content, AppToolbar, Tabs, TabContent } from 'components/Layout'

const AppLayout = ({ location, children, tabs }) => (
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

export default AppLayout
