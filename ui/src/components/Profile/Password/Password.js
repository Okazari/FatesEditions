import React from 'react'
import styles from './style.scss'
import Input from '../../common/Input'
import Button from '../../common/Button'

const Password = ({ updatePassword }) => {
  // TODO: display form Error newPass != confirmation
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
      <Button>
        Changer de mot de passe
      </Button>
    </form>
  )
}
export default Password
