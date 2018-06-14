import React from 'react'
import styles from './style.scss'

const DisplayObjects = ({ game }) => {
  return (
    <div className={styles.component}>
      <div className={styles.title}>Objets</div>
      {
        game.objects.map((objectId) => {
          const name = game.book.objects.find(current => current.id === objectId).name
          return <div key={objectId} className={styles.item}>{name}</div>
        })
      }
    </div>
  )
}

export default DisplayObjects
