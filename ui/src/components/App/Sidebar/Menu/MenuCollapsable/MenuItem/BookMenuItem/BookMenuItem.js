import React from 'react'
import MenuItem from '../MenuItem'
const BookMenuItem = ({ book={} }) => {
  return <MenuItem label={book.name} />
}

export default BookMenuItem