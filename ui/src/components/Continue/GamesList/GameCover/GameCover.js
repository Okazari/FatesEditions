import React from 'react'
import Book from 'components/common/Book'

const GameCover = ({ game, delay }) => {
  return (
    <Book showDelay={delay} book={game.book} />
  )
}

export default GameCover