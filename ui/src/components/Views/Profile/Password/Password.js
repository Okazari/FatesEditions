import React from 'react'
import Input from 'components/common/Input'
import { Button, NarrowForm, ErrorMessage, SuccessMessage } from 'components/common'

const Password = ({ updatePassword, loading, error, success }) => (
  <NarrowForm
    onSubmit={(e) => {
      e.preventDefault()
      updatePassword({
        oldPassword: e.target.old.value,
        newPassword: e.target.new.value,
        confirmation: e.target.confirmation.value,
      })
    }}
  >
    <Input
      label="Ancien mot de passe"
      domProps={{
        type: 'password',
        placeholder: 'Votre ancien mot de passe',
        name: 'old',
      }}
    />
    <Input
      label="Nouveau mot de passe"
      domProps={{
        type: 'password',
        placeholder: 'Votre nouveau mot de passe',
        name: 'new',
      }}
    />
    <Input
      label="Confirmation"
      domProps={{
        type: 'password',
        placeholder: 'Confirmation',
        name: 'confirmation',
      }}
    />
    {
      error && <ErrorMessage>
        {'Oups, l\'ancien mot de passe est incorrect ou bien les deux nouveaux mots de passe ne correspondent pas !'}
      </ErrorMessage>
    }
    {
      success && <SuccessMessage>
        {'Changement de mot de passe effectué'}
      </SuccessMessage>
    }
    <Button>
      { loading
        ? 'Chargement'
        : 'Changer de mot de passe'
      }
    </Button>
  </NarrowForm>
)

export default Password
