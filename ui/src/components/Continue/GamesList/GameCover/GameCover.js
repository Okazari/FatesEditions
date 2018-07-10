import React from 'react'
import Book from 'components/common/Book'

const GameCover = ({ game, delay }) => {
  const title = game.book.pages.find(page => game.currentPageId === page.id).title
  const date = new Date(game.lastModificationDate).toLocaleString()
  const infos = [title, date]
  return <Book showDelay={delay} book={game.book} infos={infos} />
}

export default GameCover