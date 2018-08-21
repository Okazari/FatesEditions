import React from 'react'
import { AlertMessage, Emphasis, Button } from 'components/common'
import styles from './style.scss'

const DeleteButton = ({ onClick }) => (
  <div>
    <AlertMessage title={'Attention !'}>
      <Emphasis>Supprimer</Emphasis>
      votre brouillon supprimera celui-ci
      <Emphasis>définitivement</Emphasis>
      et de manière<Emphasis>irréversible.</Emphasis>
    </AlertMessage>
    <Button
      domProps={{ onClick }}
      className={styles.delete}
    >
      Supprimer mon brouillon
    </Button>
  </div>
)

export default DeleteButton
