import React from 'react'
import { RouteService } from 'services'
import { Book } from 'components/common'

const GameTile = ({ content, showDelay, deleteGame }) => {
  const title = content.book.pages.find(page => content.currentPageId === page.id).title
  const date = new Date(content.lastModificationDate).toLocaleString()
  const infos = [title, date]
  const onClick = () => RouteService.goTo(RouteService.routes.playgame(content.id))
  const onDelete = () => deleteGame()
  return (<Book
    showDelay={showDelay}
    book={content.book}
    infos={infos}
    onClick={onClick}
    onDelete={onDelete}
  />)
}

export default GameTile
