import React from 'react'
import { Layout, Content, AppToolbar, Tabs, TabContent } from 'components/Layout'
import { RouteService } from 'services'

const tabSignIn = { label: 'Connexion', link: RouteService.routes.signin() }
const tabSignUp = { label: 'Inscription', link: RouteService.routes.signup() }
const tabs = [tabSignIn, tabSignUp]

const Connection = ({ location, children }) => (
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

export default Connection