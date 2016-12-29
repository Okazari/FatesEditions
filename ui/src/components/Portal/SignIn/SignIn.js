import React from 'react'
import styles from '../common/style.scss'
import { Input, Button } from 'components/common'
import { Box, BoxHeader } from 'components/common/Box'
import { AdviceLink } from 'components/Portal/common'
import { browserHistory } from 'react-router'
import { AuthService } from 'services'

 
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
      .then(response => {
        if (response.status >= 400) throw response.status
        return  response.json()
      })
      .catch(error => this.setState({ login: false, error: true }))
      .then((data) => {
        window.localStorage.setItem('auth-token', data.token)
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
          <form onSubmit={this.login}>
            <Input
              label="Nom d'utilisateur"
              domProps={{
                placeholder: "Entrez votre nom d'utilisateur",
                type: "text",
                name: "username",
              }}
            />
            <Input
              label="Mot de passe"
              domProps={{
                placeholder: "Entrez votre mot de passe",
                type: "password",
                name: "password"
              }}
            />
            <Button className={styles.button}>
              CONNEXION
            </Button>
            { 
              this.state.error && 
              <div className={styles.messageErr}>
                Mauvais nom d'utilisateur ou mot de passe
              </div> 
            }
            { 
              this.state.login && 
              <div className={styles.message}>
                Connection en cours...
              </div> 
            }
          </form>
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
        </Box>
      </div>
    )
  }
}

export default SignIn
