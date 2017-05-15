import React from 'react'
import styles from '../common/style.scss'
import { LabelInput, Button } from 'components/common'
import { Box, BoxHeader, BoxBody, BoxFooter } from 'components/common/Box'

const Recover = ( ) => {
  const title = "Nom d'utilisateur/Mot de passe oublié"
  const buttonLabel = "M'envoyer un email de récupération de compte"
  return (
    <div className={styles.component}>
      <Box>
        <BoxHeader withBorder className={styles.header}>
          <h3 className="box-title">{title}</h3>
        </BoxHeader>
        <BoxBody>
          <LabelInput
            label="Email"
            domProps={{
              placeholder: "Email associé à votre compte"
            }}
          />
        </BoxBody>
        <BoxFooter>
          <Button className={styles.button}>
            {buttonLabel}
          </Button>
        </BoxFooter>
      </Box>
    </div>
  )
}

export default Recover
