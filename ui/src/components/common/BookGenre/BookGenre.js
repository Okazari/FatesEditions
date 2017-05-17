import React from 'react'

const BookGenres = ({ genre = {} }) => {
  return (
    <h4 className="label label-primary">
      <i className={`fa fa-icon fa-${genre.icon}`} style={{ marginRight: '5px' }} />{genre.name}
    </h4>
  )
}

export default BookGenres
