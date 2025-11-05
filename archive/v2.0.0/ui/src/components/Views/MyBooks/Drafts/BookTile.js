import React from 'react'
import { RouteService } from 'services'
import { Book } from 'components/common'

const editDraft = (draftId) => {
  RouteService.goTo(RouteService.routes.writebook(draftId))
}

const BookTile = ({ showDelay, content }) => (
  <Book
    showDelay={showDelay}
    book={content}
    onClick={() => editDraft(content.id)}
  />
)

export default BookTile
