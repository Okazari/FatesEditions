import React from 'react'
import styles from './style.scss'
import Input from 'components/common/Input'

const SignIn = ( ) => {
  return (
    <div className={styles.component}>
      <div className="box">
        <div className="box-body">
          <div className="box-header with-border">
            <h3 className="box-title">Renseignez vos identifiants</h3>
          </div>
          <form>
            <Input
              label="Nom d'utilisateur"
              domProps={{
                placeholder: "Entrez votre nom d'utilisateur"
              }}
            />
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignIn
