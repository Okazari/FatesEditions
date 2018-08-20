import React from 'react'
import { Input, Button, NarrowForm, ErrorMessage } from 'components/common'

const SignUp = ({ signUp, loading, error }) => (
  <NarrowForm
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
      error && <ErrorMessage>{error}</ErrorMessage>
    }
    <Button>
      {
        loading
        ? 'Chargement'
        : 'Inscription'
      }
    </Button>
  </NarrowForm>
)

export default SignUp
