import React from 'react'
import Input from 'components/common/Input'
import { Button, Form } from 'components/common'
import styles from './style.scss'

const Password = ({ updatePassword, state }) => {
  const errorText = 'Oups, l\'ancien mot de passe est incorrect ou bien les deux nouveaux mots de passe ne correspondent pas !'
  return (
    <Form
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
      { !!state.error &&
        <div className={styles.error}>
          {errorText}
        </div>
      }
      { !!state.data &&
        <div className={styles.sucess}>
          {'Changement de mot de passe effectué'}
        </div>
      }
      <Button>
        { !state.loading
          ? 'Changer de mot de passe'
          : 'Chargement'
        }
      </Button>
    </Form>
  )
}
export default Password
