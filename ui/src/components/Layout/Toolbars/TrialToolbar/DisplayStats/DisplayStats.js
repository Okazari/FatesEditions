import React from 'react'
import styles from './style.scss'

const DisplayStats = ({ game }) => {
  return (
    <div className={styles.component}>
      {
        Object.entries(game.stats).map((stat) => {
          const name = game.book.stats.find(current => current.id === stat[0]).name
          return (
            <div>
              <div className={styles.name}>{name}</div>
              <div>{stat[1]}</div>
            </div>
          )
        })
      }
    </div>
  )
}

export default DisplayStats
