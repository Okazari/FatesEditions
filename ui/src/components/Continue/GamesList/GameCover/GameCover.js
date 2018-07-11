import React from 'react'
import { RouteService } from 'services'
import { Book } from 'components/common'

const GameCover = ({ game, delay, deleteGame }) => {
  const title = game.book.pages.find(page => game.currentPageId === page.id).title
  const date = new Date(game.lastModificationDate).toLocaleString()
  const infos = [title, date]
  const onClick = () => RouteService.goTo(RouteService.routes.playgame(game.id))
  const onDelete = () => deleteGame()
  return (<Book
    showDelay={delay}
    book={game.book}
    infos={infos}
    onClick={onClick}
    onDelete={onDelete}
  />)
}

export default GameCover
