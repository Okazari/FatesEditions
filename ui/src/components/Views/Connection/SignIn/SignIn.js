import React from 'react'
import { Input, Button, NarrowForm, Message } from 'components/common'

const SignIn = ({ signIn, state }) => (
  <NarrowForm
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
    <Message
      state={state}
      errorMessage={'Mauvais nom d\'utilisateur ou mot de passe'}
      successMessage={'Connecté'}
    />
    <Button>
      { !state.loading
        ? 'CONNEXION'
        : 'Chargement'
      }
    </Button>
  </NarrowForm>
)

export default SignIn
