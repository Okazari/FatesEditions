import React from 'react'
import { AlertMessage, Emphasis, WideButton } from 'components/common'
import styles from '../style.scss'

const PublishButton = ({ onClick, loading, error }) => (
  <div className={styles.actionWarning}>
    {
      error
      ? (
        <AlertMessage title={'Format de livre incorrect !'}>
          Votre livre ne peux pas être publié en {"l'état"}.
          Actuellement la seule raison est {"d'avoir"} oublié de
          <Emphasis>définir une page de début à votre livre.</Emphasis>
          Si ce {"n'est"} pas le cas merci de contacter {"l'administrateur"} à {"l'adresse"} fateseditions@gmail.com.
        </AlertMessage>
      )
      : (
        <AlertMessage title={'Information importante'}>
          <Emphasis>Publier</Emphasis>
          votre brouillon déplacera celui-ci dans la section
          <Emphasis>Mes livres publiés.</Emphasis>
          Les autres membres pourrons alors trouver votre
          histoire dans la liste des
          <Emphasis>livres jouables.</Emphasis>
          Il ne sera dès lors
          <Emphasis>plus éditable</Emphasis>
          à moins de le repasser en brouillon.
        </AlertMessage>
      )
    }
    <WideButton
      domProps={{ onClick }}
      className={styles.button}
    >
      {
        loading
        ? 'Chargement'
        : 'Publier'
      }
    </WideButton>
  </div>
)

export default PublishButton
