import React from 'react'
import { Input, Button, Form } from 'components/common'
import styles from './style.scss'

const SignIn = ({ signIn, state }) => (
  <Form
    onSubmit={(e) => {
      e.preventDefault()
      signIn({
        username: e.target.username.value,
        password: e.target.password.value,
      })
    }}
  >
    <Input
      label="Nom d'utilisateur"
      domProps={{
        placeholder: "Entrez votre nom d'utilisateur",
        type: 'text',
        name: 'username',
      }}
    />
    <Input
      label="Mot de passe"
      domProps={{
        placeholder: 'Entrez votre mot de passe',
        type: 'password',
        name: 'password',
      }}
    />
    {
      !!state.error &&
      <div className={styles.error}>
        {'Mauvais nom d\'utilisateur ou mot de passe'}
      </div>
    }
    {
      !!state.data &&
      <div className={styles.success}>
        {'Connecté'}
      </div>
    }
    <Button>
      { !state.loading
        ? 'CONNEXION'
        : 'Chargement'
      }
    </Button>
  </Form>
)

export default SignIn
