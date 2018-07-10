import React from 'react'
import GameCover from './GameCover'
import styles from './style.scss'

const GamesList = ({ gamesList }) => {
  console.log('gamesList : ', gamesList)
  const nbColumns = document && Math.floor((document.body.clientWidth - 100) / 240)
  // TODO Replace with loader
  if (!gamesList) return null
  return (
    <div className={styles.component}>
    {
      gamesList.length === 0 ? <div>Aucune partie en cours</div> : null
    }
      <div className={styles.list}>
        {
          gamesList.map((game, index) => {
            const delay = 100 * ((index % nbColumns) + Math.floor(index / nbColumns) + 1)
            return (
              <div
                key={game.id}
                className={styles.book}
              >
                <GameCover game={game} delay={delay} />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default GamesList