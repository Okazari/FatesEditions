import React from 'react'
import { Input, Button, NarrowForm, ErrorMessage } from 'components/common'

const SignIn = ({ signIn, error, loading }) => (
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
    {
      error && <ErrorMessage>{'Mauvais nom d\'utilisateur ou mot de passe'}</ErrorMessage>
    }
    <Button>
      { loading
        ? 'Chargement'
        : 'CONNEXION'
      }
    </Button>
  </NarrowForm>
)

export default SignIn
