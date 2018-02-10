import React from 'react'
import styles from './style.scss'
import Input from '../../common/Input'
import Button from '../../common/Button'

const Password = ({ updatePassword, state }) => {
  const errorText = 'Oups, l\'ancien mot de passe est incorrect ou bien les deux nouveaux mots de passe ne correspondent pas !'
  return (
    <form
      className={styles.component}
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
        debounce={500}
        domProps={{
          type: 'text',
          placeholder: 'Votre ancien mot de passe',
          name: 'old',
        }}
      />
      <Input
        label="Nouveau mot de passe"
        debounce={500}
        domProps={{
          type: 'text',
          placeholder: 'Votre nouveau mot de passe',
          name: 'new',
        }}
      />
      <Input
        label="Confirmation"
        debounce={500}
        domProps={{
          placeholder: 'Confirmation',
          name: 'confirmation',
        }}
      />
      { !!state.error &&
        <div className={styles.error}>
          {errorText}
        </div>
      }
      <Button>
        Changer de mot de passe
      </Button>
    </form>
  )
}
export default Password
