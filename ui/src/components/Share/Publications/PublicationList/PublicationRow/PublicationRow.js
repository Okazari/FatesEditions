import React from 'react'
import { Link } from 'react-router'
import { BookGenre } from '../../../../common'
import Button from '../../../../common/Button'
import { RouteService } from '../../../../../services'

const PublicationRow = ({ book = {}, updateResource }) => {
  const updateToDraft = () => {
    book.draft = true
    updateResource(book)
  }
  return (
    <tr>
      <td>
        {book.name}
      </td>
      <td>
        <BookGenre genre={book.genreId} />
      </td>
      <td>
        <h4 className="label label-success md-whiteframe-z1">
          <i className="fa fa-pencil" style={{ marginRight: '5px' }} />
          Publié
        </h4>
      </td>
      <td>
        {book.synopsis}
      </td>
      <td>
        <Link to={RouteService.routes.writebook(book._id)}>
          <Button className="btn-primary md-whiteframe-z1">
            Editer
          </Button>
        </Link>
      </td>
      <td>
        <Button className="btn btn-primary md-whiteframe-z1" domProps={{ onClick: updateToDraft }}>
          Passer en brouillon
        </Button>
      </td>
    </tr>
  )
}

export default PublicationRow
