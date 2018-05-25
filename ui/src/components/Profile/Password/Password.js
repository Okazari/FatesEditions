import React from 'react'
import styles from './style.scss'
import Input from '../../common/Input'

const Password = () => {
  return (
    <div className={styles.component}>
      <Input
        label="Ancien mot de passe"
        debounce={500}
        className={styles.input}
        domProps={{
          type: 'text',
          placeholder: 'Votre ancien mot de passe',
          onChange: () => {},
        }}
      />
      <Input
        label="Nouveau mot de passe"
        debounce={500}
        className={styles.input}
        domProps={{
          type: 'text',
          placeholder: 'Votre ancien mot de passe',
          onChange: () => {},
        }}
      />
      <Input
        label="Confirmation"
        debounce={500}
        className={styles.input}
        domProps={{
          type: 'text',
          placeholder: 'Votre ancien mot de passe',
          onChange: () => {},
        }}
      />
    </div>
  )
}
export default Password
