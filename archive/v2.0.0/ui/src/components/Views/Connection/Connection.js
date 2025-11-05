import React from 'react'
import { AppLayout, AlertMessage, Emphasis } from 'components/common'
import { RouteService } from 'services'
import styles from './style.scss'

const tabSignIn = { label: 'Connexion', link: RouteService.routes.signin() }
const tabSignUp = { label: 'Inscription', link: RouteService.routes.signup() }
const tabPassword = { label: 'mot de passe perdu ?', link: RouteService.routes.passwordrecovery() }
const tabs = [tabSignIn, tabSignUp, tabPassword]

const Message = () => (
  <AlertMessage
    title={'Vous avez été redirigé'}
    className={styles.alertMessage}
  >
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
