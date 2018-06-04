import React from 'react'
import styles from './style.scss'
import Input from '../../common/Input'
import Button from '../../common/Button'

const Password = ({ updatePassword }) => {
  return (
    <form
      className={styles.component}
      onSubmit={(e) => {
        e.preventDefault()
        updatePassword({
          oldPassword: e.target[0].value,
          newPassword: e.target[1].value,
          confirmation: e.target[3].value,
        })
      }}
    >
      <Input
        label="Ancien mot de passe"
        debounce={500}
        domProps={{
          type: 'text',
          placeholder: 'Votre ancien mot de passe',
        }}
      />
      <Input
        label="Nouveau mot de passe"
        debounce={500}
        domProps={{
          type: 'text',
          placeholder: 'Votre nouveau mot de passe',
        }}
      />
      <Input
        label="Confirmation"
        debounce={500}
        domProps={{
          placeholder: 'Confirmation',
        }}
      />
      <Button>
        Changer de mot de passe
      </Button>
    </form>
  )
}
export default Password
