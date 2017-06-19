import React from 'react'
import BookGenre from '../../BookGenre'

const BookRow = ({ book = {} }) => {
  return (
    <tr>
      <td>
        {book.name}
      </td>
      <td>
        <BookGenre genre={book.genreId} />
      </td>
      <td>
        <h4 className="label label-primary md-whiteframe-z1">
          <i className="fa fa-pencil" style={{ marginRight: '5px' }} />
          {book.authorId}
        </h4>
      </td>
      <td>
        {book.synopsis}
      </td>
      <td>
        <button className="btn btn-primary md-whiteframe-z1">
          Jouer
        </button>
      </td>
    </tr>
  )
}

export default BookRow
