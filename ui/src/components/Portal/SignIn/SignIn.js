import React from 'react'
import { browserHistory } from 'react-router'
import styles from '../common/style.scss'
import { LabelInput, Button } from '../../common'
import { Box, BoxHeader, BoxBody, BoxFooter } from '../../common/Box'
import { AdviceLink } from '../../Portal/common'
import { AuthService } from '../../../services'

class SignIn extends React.Component {

  constructor(props) {
    super(props)
    this.login = this.login.bind(this)
    this.state = {}
  }

  login(event) {
    event.preventDefault()
    const credentials = {
      username: event.target.username.value,
      password: event.target.password.value,
    }
    this.setState({ login: true, error: false })
    AuthService.login(credentials)
      .then((response) => {
        if (response.status >= 400) throw response.status
        return response.json()
      })
      .catch(error => this.setState({ login: false, error: true }))
      .then(({ token }) => {
        AuthService.setToken(token)
        browserHistory.push('/app')
      })
  }

  render() {
    return (
      <div className={styles.component}>
        <Box>
          <BoxHeader withBorder className={styles.header}>
            <h3 className="box-title">Renseignez vos identifiants</h3>
          </BoxHeader>
          <BoxBody>
            <form onSubmit={this.login}>
              <LabelInput
                label="Nom d'utilisateur"
                domProps={{
                  placeholder: "Entrez votre nom d'utilisateur",
                  type: 'text',
                  name: 'username',
                }}
              />
              <LabelInput
                label="Mot de passe"
                domProps={{
                  placeholder: 'Entrez votre mot de passe',
                  type: 'password',
                  name: 'password',
                }}
              />
              <Button className={styles.button}>
                CONNEXION
              </Button>
              {
                this.state.error &&
                <div className={styles.messageErr}>
                  {"Mauvais nom d'utilisateur ou mot de passe"}
                </div>
              }
              {
                this.state.login &&
                <div className={styles.message}>
                  Connection en cours...
                </div>
              }
            </form>
          </BoxBody>
          <BoxFooter>
            <AdviceLink
              advice="Pas encore de compte ?"
              label="Inscris toi !"
              link="/portal/signup"
            />
            <AdviceLink
              advice="Nom d'utilisateur/Mot de passe oublié ?"
              label="Aidez moi !"
              link="/portal/recover"
            />
          </BoxFooter>
        </Box>
      </div>
    )
  }
}

export default SignIn
