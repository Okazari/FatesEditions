import React from 'react'
import { Link } from 'react-router'
import { ButtonIcon } from 'components/common'
import { RouteService } from 'services'

const PageRow = ({ page = {}, bookId, disabled, deleteResource }) => {
  return (
    <tr>
      <td>
        <Link to={RouteService.routes.writebookpage(bookId, page._id)}>
          <ButtonIcon
            icon="mode_edit"
            domProps={{ disabled }}
          />
        </Link>
      </td>
      <td>{page.title}</td>
      <td>{page.description}</td>
      <td>
        <ButtonIcon
          icon="delete"
          domProps={{ onClick: () => deleteResource(page._id), disabled }}
        />
      </td>
    </tr>
  )
}

export default PageRow
