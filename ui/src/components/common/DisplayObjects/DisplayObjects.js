import React from 'react'
import Item from './Item'
import styles from './style.scss'

const DisplayObjects = ({ objects }) => (
  <div className={styles.component}>
    <div className={styles.title}>Objets</div>
    {
      objects.map(objectId => <Item key={objectId} objectId={objectId} />)
    }
  </div>
)

export default DisplayObjects
