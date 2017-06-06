import React from 'react'
import { Link } from 'react-router'
import { Button } from '../../../../common'
import { RouteService } from '../../../../../services'

const PageRow = ({ page = {}, bookId, deleteResource }) => {
  return (
    <tr>
      <td>
        <Link to={RouteService.routes.writebookpage(bookId, page._id)}>
          <Button className="fa fa-pencil md-whiteframe-z1" />
        </Link>
      </td>
      <td>{page.title}</td>
      <td>{page.description}</td>
      <td><Button className="fa fa-close md-whiteframe-z1" domProps={{ onClick: () => deleteResource(page._id) }} /></td>
    </tr>
  )
}

export default PageRow
