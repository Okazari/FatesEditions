import React from 'react'
import { Input, ButtonIcon, DataRow } from 'components/common'
import styles from '../styles.scss'

const StatRow = ({ stat, index, disabled, updateResource, removeStat }) => {
  const onDelete = () => removeStat(index)
  return (
    <DataRow>
      <div>
        <Input
          debounce={500}
          domProps={{
            type: 'text',
            value: stat.name,
            onChange: name => updateResource(index, { ...stat, name }),
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
            value: stat.description,
            onChange: description => updateResource(index, { ...stat, description }),
            placeholder: 'Description',
            disabled,
            required: true,
          }}
        />
      </div>
      <div>
        <Input
          debounce={500}
          domProps={{
            type: 'number',
            value: stat.initValue,
            onChange: initValue => updateResource(index, { ...stat, initValue }),
            placeholder: 'Valeur initiale',
            disabled,
            required: true,
          }}
        />
      </div>
      <div>
        <Input
          debounce={500}
          domProps={{
            type: 'number',
            value: stat.min,
            onChange: min => updateResource(index, { ...stat, min }),
            placeholder: 'Min',
            disabled,
            required: true,
          }}
        />
      </div>
      <div>
        <Input
          debounce={500}
          domProps={{
            type: 'number',
            value: stat.max,
            onChange: max => updateResource(index, { ...stat, max }),
            placeholder: 'Max',
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
            value: stat.visible,
            checked: stat.visible,
            onChange: visible => updateResource(index, { ...stat, visible }),
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

export default StatRow
