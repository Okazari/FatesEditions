import React from 'react'
import { Input, Button, NarrowForm, ErrorMessage, SuccessMessage } from 'components/common'

const PasswordRecovery = ({ recoverPassword, loading, error, success }) => (
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
        placeholder: 'Entrez votre Email',
        type: 'text',
        name: 'email',
      }}
    />
    {
      error && <ErrorMessage>{error}</ErrorMessage>
    }
    {
      success && <SuccessMessage>{'Votre mot de passe provisoire vous à été envoyé'}</SuccessMessage>
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
