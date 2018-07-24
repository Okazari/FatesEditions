import React from 'react'
import styles from './styles.scss'
import GamePage from './GamePage'

const Game = () => (
  <div className={styles.wrapper}>
    <div className={styles.content}>
      <GamePage />
    </div>
  </div>)

export default Game
