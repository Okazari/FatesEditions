import React from 'react'
import { AppLayout, AlertMessage, Emphasis } from 'components/common'
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

const Connection = (props) => {
  const { location, children } = props
  const redirectMessage = location.state && location.state.isRedirected
  return (
    <AppLayout {...props} tabs={tabs}>
      { redirectMessage &&
        <Message />
      }
      {children}
    </AppLayout>
  )
}

export default Connection
