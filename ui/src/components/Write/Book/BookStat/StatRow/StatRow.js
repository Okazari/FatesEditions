import React from 'react'
import { Input, Button } from '../../../../common'

const StatRow = ({ index, stat = {}, updateResource, deleteResource }) => {
  const onDelete = e => deleteResource(e.target.id)
  return (
    <tr>
      <td>
        <Input
          debounce={500}
          domProps={{
            type: 'text',
            value: stat.name,
            onChange: name => updateResource(index, { ...stat, name }),
            placeholder: 'Libellé',
            required: true,
          }}
        />
      </td>
      <td>
        <Input
          debounce={500}
          domProps={{
            type: 'text',
            value: stat.description,
            onChange: name => updateResource(index, { ...stat, name }),
            placeholder: 'Description',
            required: true,
          }}
        />
      </td>
      <td>
        <Input
          debounce={500}
          domProps={{
            type: 'number',
            value: stat.initValue,
            onChange: name => updateResource(index, { ...stat, name }),
            placeholder: 'Valeur initiale',
            required: true,
          }}
        />
      </td>
      <td>
        <Input
          debounce={500}
          domProps={{
            type: 'number',
            value: stat.min,
            onChange: name => updateResource(index, { ...stat, name }),
            placeholder: 'Min',
            required: true,
          }}
        />
      </td>
      <td>
        <Input
          debounce={500}
          domProps={{
            type: 'number',
            value: stat.max,
            onChange: name => updateResource(index, { ...stat, name }),
            placeholder: 'Max',
            required: true,
          }}
        />
      </td>
      <td>
        <Input
          debounce={500}
          domProps={{
            type: 'checkbox',
            value: stat.visible,
            checked: stat.visible,
            onChange: name => updateResource(index, { ...stat, name }),
            required: true,
          }}
        />
      </td>
      <td>
        <Button className="fa fa-close md-whiteframe-z1" domProps={{ onClick: onDelete, id: index }} />
      </td>
    </tr>
  )
}

export default StatRow
