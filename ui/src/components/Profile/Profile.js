import React from 'react'
// import styles from './style.scss'
import { Layout, Content, Toolbar, Tabs } from '../Layout'
import { RouteService } from '../../services'

const tabPassword = { label: 'Changer de mot de passe', link: RouteService.routes.profilepassword() }
const tabs = [tabPassword]

const Profile = ({ location, children }) => {
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

export default Profile
