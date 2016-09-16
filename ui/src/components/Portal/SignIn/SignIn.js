import React from 'react'
import styles from '../common/style.scss'
import { Input, Button } from 'components/common'
import { Box, BoxHeader } from 'components/common/Box'
import { AdviceLink } from 'components/Portal/common'
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
            placeholder: "Entrez votre nom d'utilisateur",
            type: "text"
          }}
        />
        <Input
          label="Mot de passe"
          domProps={{
            placeholder: "Entrez votre mot de passe",
            type: "password"
          }}
        />
        <Button className={styles.button}>
        CONNEXION
        </Button>
        <AdviceLink
          advice="Pas encore de compte ?"
          label="Inscris toi !"
          link="/portal/signup"
        />
        <AdviceLink
          advice="Nom d'utilisateur/Mot de passe oublié ?"
          label="Aidez moi !"
          link="/portal/recover"
        />
      </Box>
    </div>
  )
}

export default SignIn
