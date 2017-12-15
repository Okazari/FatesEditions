import React from 'react'
import { Button, Input } from '../../../common'

const ItemRow = ({ index, item = {}, disabled, updateResource, deleteResource }) => {
  const onDelete = e => deleteResource(e.target.id)
  return (
    <tr>
      <td>
        <Input
          debounce={500}
          domProps={{
            type: 'text',
            value: item.name,
            onChange: name => updateResource(index, { ...item, name }),
            placeholder: 'Libellé',
            disabled,
            required: true,
          }}
        />
      </td>
      <td>
        <Input
          debounce={500}
          domProps={{
            type: 'text',
            value: item.description,
            onChange: description => updateResource(index, { ...item, description }),
            placeholder: 'Description',
            disabled,
            required: true,
          }}
        />
      </td>
      <td>
        <Input
          debounce={500}
          domProps={{
            type: 'checkbox',
            value: item.atStart,
            checked: item.atStart,
            onChange: atStart => updateResource(index, { ...item, atStart }),
            placeholder: 'Début',
            disabled,
            required: true,
          }}
        />
      </td>
      <td>
        <Input
          debounce={500}
          domProps={{
            type: 'checkbox',
            value: item.visible,
            checked: item.visible,
            onChange: visible => updateResource(index, { ...item, visible }),
            placeholder: 'Visible',
            disabled,
            required: true,
          }}
        />
      </td>
      <td>
        <Button
          className="fa fa-close md-whiteframe-z1"
          domProps={{ onClick: onDelete, id: index, disabled }}
        />
      </td>
    </tr>

  )
}

export default ItemRow
