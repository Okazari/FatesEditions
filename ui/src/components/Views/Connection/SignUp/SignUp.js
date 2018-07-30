import React from 'react'
import { Input, Button, Form } from 'components/common'
import styles from './style.scss'

const SignUp = ({ signUp, state }) => {
  const errorMessage = state.error ? state.error.graphQLErrors[0].message : ''
  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault()
        signUp({
          username: e.target.username.value,
          email: e.target.email.value,
          password: e.target.password.value,
          confirmation: e.target.confirmation.value,
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
        label="Adresse mail"
        domProps={{
          placeholder: 'Entrez votre adresse mail',
          type: 'text',
          name: 'email',
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
      <Input
        label="Confirmation du mot de passe"
        domProps={{
          placeholder: 'Confirmez votre mot de passe',
          type: 'password',
          name: 'confirmation',
        }}
      />
      {
        !!state.error &&
        <div className={styles.error}>
          {errorMessage}
        </div>
      }
      {
        !!state.data &&
        <div className={styles.success}>
          {'Connecté'}
        </div>
      }
      <Button>
        {
          !state.loading
          ? 'Inscription'
          : 'Chargement'
        }
      </Button>
    </Form>
  )
}
export default SignUp
