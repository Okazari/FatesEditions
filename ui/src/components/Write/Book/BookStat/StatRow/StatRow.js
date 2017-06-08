import React from 'react'
import { Input, Button } from '../../../../common'

const StatRow = ({ stat, index, updateResource, removeStat }) => {
  const onDelete = e => removeStat(e.target.id)
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
            onChange: description => updateResource(index, { ...stat, description }),
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
            onChange: initValue => updateResource(index, { ...stat, initValue }),
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
            onChange: min => updateResource(index, { ...stat, min }),
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
            onChange: max => updateResource(index, { ...stat, max }),
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
            onChange: visible => updateResource(index, { ...stat, visible }),
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
