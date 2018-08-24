import React from 'react'
import classnames from 'classnames'
import styles from './styles.scss'
import GamePage from './GamePage'

const Game = ({ panelIsOpen }) => {
  const className = classnames(panelIsOpen && styles.panelIsOpen, styles.content)
  return (
    <div className={className}>
      <GamePage />
    </div>
  )
}

export default Game
