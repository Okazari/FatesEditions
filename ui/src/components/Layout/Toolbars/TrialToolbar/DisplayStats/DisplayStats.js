import React from 'react'
import styles from './style.scss'

const DisplayStats = ({ game }) => {
  return (
    <div className={styles.component}>
      {
        Object.entries(game.stats).map(([key, value]) => {
          const name = game.book.stats.find(current => current.id === key).name
          return (
            <div key={key}>
              <div className={styles.name}>{name}</div>
              <div>{value}</div>
            </div>
          )
        })
      }
    </div>
  )
}

export default DisplayStats
