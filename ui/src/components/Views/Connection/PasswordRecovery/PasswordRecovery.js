import React from 'react'
import { Input, Button, NarrowForm, ErrorMessage } from 'components/common'

const PasswordRecovery = ({ recoverPassword, error, loading }) => (
  <NarrowForm
    onSubmit={(e) => {
      e.preventDefault()
      recoverPassword({
        email: e.target.email.value,
      })
    }}
  >
    <Input
      label="Email"
      domProps={{
        placeholder: "Entrez votre Email",
        type: 'text',
        name: 'email',
      }}
    />
    {
      error && <ErrorMessage>{'Aucun utilisateur correspondant'}</ErrorMessage>
    }
    <Button>
      { loading
        ? 'Chargement'
        : 'CONNEXION'
      }
    </Button>
  </NarrowForm>
)

export default PasswordRecovery