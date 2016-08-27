import React from 'react'
import styles from './style.scss'
import Input from 'components/common/Input'
import {Box, BoxHeader} from 'components/common/Box'

const SignIn = ( ) => {
  return (
    <div className={styles.component}>
      <Box>
        <BoxHeader withBorder className={styles.header}>
          <h3 className="box-title">Renseignez vos identifiants</h3>
        </BoxHeader>
        <Input
          label="Nom d'utilisateur"
          domProps={{
            placeholder: "Entrez votre nom d'utilisateur"
          }}
        />
        <Input
          label="Mot de passe"
          domProps={{
            placeholder: "Entrez votre mot de passe"
          }}
        />
      </Box>
    </div>
  )
}

export default SignIn
