import React from 'react'

const BookRow = ({ book = {}, genre }) => {
  console.log(book);
  return (
    <tr>
      <td>
        {book.name}
      </td>
      <td>
        {
          genre && <h4 className="label label-primary">
            <i className="fa fa-icon" style={{marginRight: '5px'}} />
            {genre.name}
          </h4>
        }
      </td>
      <td>
        <h4 className="label label-primary md-whiteframe-z1">
          <i className="fa fa-pencil" style={{marginRight: '5px'}} />
          {book.authorName}
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
