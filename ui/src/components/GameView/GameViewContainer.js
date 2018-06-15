import React from 'react'
import bookJSON from 'components/book'
import GameView from './GameView'

const createGame = (book) => {
  return {
    currentPageId: '5a7f12efe330ea247cf6431e',
    book,
    bookStatus: 'up-to-date',
    stats: book.stats.reduce((acc, stat) => {
      return {
        ...acc,
        [stat.id]: {
          name: stat.name,
          value: stat.initValue,
        },
      }
    }, {}),
    objects: book.objects.reduce((acc, object) => {
      return {
        ...acc,
        [object.id]: {
          name: object.name,
          possessed: object.atStart,
        },
      }
    }, {}),
    tree: [],
  }
}

export default ({ params }) => (
  <GameView
    gameId={params.gameId}
    key={params.gameId}
    game={createGame(bookJSON.book)}
  />
)
