import React from 'react'
import { Layout, Content, AppToolbar, Tabs, TabContent } from 'components/Layout'
import { RouteService } from 'services'

const tabPassword = { label: 'Changer de mot de passe', link: RouteService.routes.profilepassword() }
const tabs = [tabPassword]

const Profile = ({ location, children }) => {
  return (
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
}

export default Profile
