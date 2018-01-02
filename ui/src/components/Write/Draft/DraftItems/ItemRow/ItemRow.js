import React from 'react'
import { ButtonIcon, Input, DataRow } from 'components/common'
import styles from '../styles.scss'

const ItemRow = ({ index, item = {}, disabled, updateResource, deleteResource }) => {
  const onDelete = () => deleteResource(index)
  return (
    <DataRow>
      <div>
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
      </div>
      <div className={styles.large}>
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
      </div>
      <div className={styles.small}>
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
      </div>
      <div className={styles.small}>
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
      </div>
      <div className={styles.small}>
        <ButtonIcon
          icon="delete"
          domProps={{ onClick: onDelete, id: index, disabled }}
        />
      </div>
    </DataRow>

  )
}

export default ItemRow
