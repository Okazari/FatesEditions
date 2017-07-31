import React from 'react'

const BookGenres = ({ author = {} }) => {
  return <span>{author.username}</span>
}

export default BookGenres
