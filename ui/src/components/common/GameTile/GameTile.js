import React from 'react'
import format from 'date-fns/format'
import frLocale from 'date-fns/locale/fr'
import { RouteService } from 'services'
import { Book } from 'components/common'

const GameTile = ({ content, showDelay, deleteGame }) => {
  const title = content.book.pages.find(page => content.currentPageId === page.id).title
  const date = format(
    new Date(content.lastModificationDate),
    'DD-MM-YY HH:mm',
    {
      locale: frLocale,
      includeSeconds: true,
    },
  )
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
