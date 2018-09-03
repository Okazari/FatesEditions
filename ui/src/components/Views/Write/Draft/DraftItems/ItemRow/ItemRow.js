import React from 'react'
import { ButtonIcon, Input, DataRow } from 'components/common'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Select from 'react-select'
import styles from '../styles.scss'

const ItemRow = ({ index, item = {}, disabled, updateObject, deleteObject }) => {
  const icons = library.definitions.fas
  const options = Object.keys(icons).map(name => ({
    value: name,
    label: <FontAwesomeIcon icon={name} />,
  }))
  const onDelete = () => deleteObject(item)
  return (
    <DataRow>
      <div>
        <Select 
          className={styles.select}
          value={{
            value: item.icon,
            label: <FontAwesomeIcon icon={item.icon} />, 
          }}
          onChange={icon => updateObject({ id: item.id, icon: icon.value })}
          options={options}
        />
      </div>
      <div>
        <Input
          debounce={500}
          domProps={{
            type: 'text',
            value: item.name,
            onChange: name => updateObject({ id: item.id, name }),
            placeholder: 'Libellé',
            disabled,
          }}
        />
      </div>
      <div className={styles.large}>
        <Input
          debounce={500}
          domProps={{
            type: 'text',
            value: item.description,
            onChange: description => updateObject({ id: item.id, description }),
            placeholder: 'Description',
            disabled,
          }}
        />
      </div>
      <div className={styles.small}>
        <Input
          domProps={{
            type: 'checkbox',
            value: item.atStart,
            checked: item.atStart,
            onChange: atStart => updateObject({ id: item.id, atStart }),
            placeholder: 'Début',
            disabled,
          }}
        />
      </div>
      <div className={styles.small}>
        <Input
          domProps={{
            type: 'checkbox',
            value: item.visible,
            checked: item.visible,
            onChange: visible => updateObject({ id: item.id, visible }),
            placeholder: 'Visible',
            disabled,
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
