import React from 'react'
import { Layout, Content, AppToolbar, Tabs } from 'components/Layout'
import { RouteService } from 'services'

const tabPassword = { label: 'Changer de mot de passe', link: RouteService.routes.profilepassword() }
const tabs = [tabPassword]

const Profile = ({ location, children }) => {
  return (
    <Layout>
      <AppToolbar />
      <Content>
        <Tabs tabs={tabs} selectedTab={location.pathname} />
        {children}
      </Content>
    </Layout>
  )
}

export default Profile
