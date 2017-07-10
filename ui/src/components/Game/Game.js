import React from 'react'
import styles from './styles.scss'
import GamePage from './GamePage'
import GameTree from './GameTree'

const Game = ({ game, onClose }) => {
  const testNodes = [
    {
      name: 'child1',
      posX: 10,
      posY: 10,
      path: 'child3',
      nodes: [
        {
          name: 'child3',
          posX: 10,
          posY: 20,
          path: 'child4',
          nodes: [
            {
              name: 'child4',
              posX: 5,
              posY: 30,
              nodes: [],
            },
            {
              name: 'child5',
              posX: 15,
              posY: 30,
              nodes: [],
            },
            {
              name: 'child6',
              posX: 30,
              posY: 30,
              nodes: [],
            },
            {
              name: 'child7',
              posX: 45,
              posY: 30,
              nodes: [],
            },
          ],
        },
        {
          name: 'child8',
          posX: 30,
          posY: 20,
          nodes: [],
        },
      ],
    },
    {
      name: 'child2',
      posX: 30,
      posY: 10,
      path: '',
      nodes: [],
    },
  ]
  return !!game && (
    <div className={styles.wrapper}>
      <div className={styles.leftSide}>
        <GameTree nodes={testNodes} />
      </div>
      <div className={styles.rightSide}>
        <div className={styles.content}>
          <div className={styles.close} onClick={onClose}>
            x
          </div>
          <GamePage page={game.book.pages.find(page => page._id === game.currentPageId)} />
        </div>
      </div>
    </div>
  )
}

export default Game
