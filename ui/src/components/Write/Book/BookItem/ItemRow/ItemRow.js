import React from 'react'
import { Button, RowInput } from '../../../../common'

const ItemRow = ({ index, item = {}, updateResource, deleteResource }) => {
  const onDelete = event => deleteResource(event.target.name)
  return (
    <tr>
      <td>
        <RowInput
          resource={item}
          resourceHandler={updateResource}
          domProps={{ type: 'text', name: 'name', placeholder: 'Libellé', required: true }}
        />
      </td>
      <td>
        <RowInput
          resource={item}
          resourceHandler={updateResource}
          domProps={{ type: 'text', name: 'description', placeholder: 'Description', required: true }}
        />
      </td>
      <td>
        <RowInput
          resource={item}
          resourceHandler={updateResource}
          domProps={{ type: 'checkbox', name: 'atStart', placeholder: 'Début', required: true }}
        />
      </td>
      <td>
        <RowInput
          resource={item}
          resourceHandler={updateResource}
          domProps={{ type: 'checkbox', name: 'visible', placeholder: 'Visible', required: true }}
        />
      </td>
      <td>
        <Button className="fa fa-close md-whiteframe-z1" domProps={{ onClick: onDelete, name: index }} />
      </td>
    </tr>

  )
}

export default ItemRow
