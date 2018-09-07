import React from 'react'
import { AppLayout, AlertMessage, Emphasis } from 'components/common'
import styles from './style.scss'

const tabForbidden = { label: 'Indisponible' }
const tabs = [tabForbidden]

const Forbidden = props => (
  <div>
    <AppLayout {...props} tabs={tabs}>
      <AlertMessage
        title={'Edition des brouillons sur mobile et tablette impossible.'}
        className={styles.forbidden} 
      >
        La partie<Emphasis>édition</Emphasis>de livre {"n'est"} pas disponible sur les appareils
        <Emphasis>mobiles</Emphasis>et les<Emphasis>tablettes.</Emphasis>
        Pour accéder à {"l'édition"}, veuillez vous connecter via un
        <Emphasis>ordinateur.</Emphasis>
      </AlertMessage>
    </AppLayout>
  </div>
)

export default Forbidden
