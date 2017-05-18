import React from 'react'
import { RowInput, Button } from '../../../../common'

const StatRow = ({ index, stat = {}, updateResource, deleteResource }) => {
  const onDelete = event => deleteResource(event.target.name)
  return (
    <tr>
      <td>
        <RowInput
          resource={stat}
          resourceHandler={updateResource}
          domProps={{ type: 'text', name: 'name', placeholder: 'Libellé', required: true }}
        />
      </td>
      <td>
        <RowInput
          resource={stat}
          resourceHandler={updateResource}
          domProps={{ type: 'text', name: 'description', placeholder: 'Description', required: true }}
        />
      </td>
      <td>
        <RowInput
          resource={stat}
          resourceHandler={updateResource}
          domProps={{ type: 'number', name: 'initValue', placeholder: 'Valeur initiale', required: true }}
        />
      </td>
      <td>
        <RowInput
          resource={stat}
          resourceHandler={updateResource}
          domProps={{ type: 'number', name: 'min', placeholder: 'Min', required: true }}
        />
      </td>
      <td>
        <RowInput
          resource={stat}
          resourceHandler={updateResource}
          domProps={{ type: 'number', name: 'max', placeholder: 'Max', required: true }}
        />
      </td>
      <td>
        <RowInput
          resource={stat}
          resourceHandler={updateResource}
          domProps={{ type: 'checkbox', name: 'visible', required: true }}
        />
      </td>
      <td>
        <Button className="fa fa-close md-whiteframe-z1" domProps={{ onClick: onDelete, name: index }} />
      </td>
    </tr>
  )
}

export default StatRow
