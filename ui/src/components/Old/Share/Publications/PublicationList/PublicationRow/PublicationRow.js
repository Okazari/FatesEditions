import React from 'react'
import { Link } from 'react-router'
import { BookGenre } from '../../../../common/Book'
import Button from '../../../../common/Button'
import { RouteService } from '../../../../../../services'

const PublicationRow = ({ book, showModal }) => {
  return !!book && (
    <tr>
      <td>
        {book.name}
      </td>
      <td>
        <h4 className="label label-primary"><BookGenre genre={book.genreId} /></h4>
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
        <Link to={RouteService.routes.editbook(book._id)}>
          <Button className="btn-primary md-whiteframe-z1">
            Editer
          </Button>
        </Link>
      </td>
      <td>
        <Button className="btn btn-primary md-whiteframe-z1" domProps={{ onClick: () => showModal(book) }}>
          Passer en brouillon
        </Button>
      </td>
    </tr>
  )
}

export default PublicationRow
