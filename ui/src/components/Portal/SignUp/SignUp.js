import React from 'react'
import styles from './style.scss'
import { Input, Button } from 'components/common'
import { Box, BoxHeader } from 'components/common/Box'
import { AdviceLink } from 'components/Portal/common'
const SignUp = ( ) => {
  return (
    <div className={styles.component}>
      <Box>
        <BoxHeader withBorder className={styles.header}>
          <h3 className="box-title">Inscription</h3>
        </BoxHeader>
        <Input
          label="Nom d'utilisateur"
          domProps={{
            placeholder: "Okazari",
            type: 'text'
          }}
        />
        <Input
          label="Adresse mail"
          domProps={{
            placeholder: "myvirtualstorybook@gmail.com",
            type: 'email'
          }}
        />
        <Input
          label="Mot de passe"
          domProps={{
            placeholder: "thisisasecret",
            type: 'password'
          }}
        />
        <Input
          label="Mot de passe (vérification)"
          domProps={{
            placeholder: "thisisasecret",
            type: 'password'
          }}
        />
        <AdviceLink
          advice="Déjà inscris ?"
          label="Connecte toi !"
          link="/portal/signin"
        />
        <AdviceLink
          advice="Nom d'utilisateur/Mot de passe oublié ?"
          label="Aidez moi !"
          link="/portal/recover"
        />
        <Button className={styles.button}>
         INSCRIPTION
        </Button>
      </Box>
    </div>
  )
}

export default SignUp
