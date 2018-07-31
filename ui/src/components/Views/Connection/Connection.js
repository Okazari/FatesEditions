import React from 'react'
import { Layout, Content, AppToolbar, Tabs, TabContent } from 'components/Layout'
import { AlertMessage, Emphasis } from 'components/common'
import { RouteService } from 'services'

const tabSignIn = { label: 'Connexion', link: RouteService.routes.signin() }
const tabSignUp = { label: 'Inscription', link: RouteService.routes.signup() }
const tabs = [tabSignIn, tabSignUp]

const Message = () => (
  <AlertMessage title={'Vous avez été redirigé'}>
    Pour pouvoir<Emphasis>écrire</Emphasis>votre propre livre ou bien
    <Emphasis>jouer</Emphasis>aux livres déjà publiés,
    vous devez être<Emphasis>connecté.</Emphasis>
  </AlertMessage>
)

const Connection = ({ location, children }) => {
  const redirectMessage = location.state && location.state.isRedirected
  return (
    <Layout>
      <AppToolbar location={location.pathname} />
      <Content>
        <Tabs tabs={tabs} selectedTab={location.pathname} />
        <TabContent>
          { redirectMessage &&
            <Message />
          }
          {children}
        </TabContent>
      </Content>
    </Layout>
  )
}

export default Connection
