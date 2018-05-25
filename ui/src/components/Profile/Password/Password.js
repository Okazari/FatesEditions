import React from 'react'
import styles from './style.scss'
import Input from '../../common/Input'

class Password extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
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
            // disabled,
            // required: true,
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
            // disabled,
            // required: true,
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
            // disabled,
            // required: true,
          }}
        />
      </div>
    )
  }
}

export default Password
