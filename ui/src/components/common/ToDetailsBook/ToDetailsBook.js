import React from 'react'
import { Book } from 'components/common'
import { RouteService } from 'services'

const ToDetailsBook = (props) => {
  const book = props.content
  return (
    <Book
      {...props}
      book={book}
      onClick={
        bookId => RouteService.goTo(RouteService.routes.book(bookId))
      }
    />
  )
}

export default ToDetailsBook
