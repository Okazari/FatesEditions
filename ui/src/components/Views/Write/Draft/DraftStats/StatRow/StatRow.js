import React from 'react'
import { Input, ButtonIcon, DataRow } from 'components/common'
import { IconSelector } from '../../common'
import styles from '../styles.scss'

const StatRow = ({ stat, index, disabled, updateStat, removeStat }) => {
  const onDelete = () => removeStat(stat)
  return (
    <DataRow>
      <div className={styles.small}>
        <IconSelector id={stat.id} icon={stat.icon} update={updateStat} />
      </div>
      <div>
        <Input
          debounce={500}
          domProps={{
            type: 'text',
            value: stat.name,
            onChange: name => updateStat({ id: stat.id, name }),
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
            value: stat.description,
            onChange: description => updateStat({ id: stat.id, description }),
            placeholder: 'Description',
            disabled,
          }}
        />
      </div>
      <div>
        <Input
          debounce={500}
          domProps={{
            type: 'number',
            value: stat.initValue,
            onChange: initValue => updateStat({ id: stat.id, initValue }),
            placeholder: 'Valeur initiale',
            disabled,
          }}
        />
      </div>
      <div>
        <Input
          debounce={500}
          domProps={{
            type: 'number',
            value: stat.min,
            onChange: min => updateStat({ id: stat.id, min }),
            placeholder: 'Min',
            disabled,
          }}
        />
      </div>
      <div>
        <Input
          debounce={500}
          domProps={{
            type: 'number',
            value: stat.max,
            onChange: max => updateStat({ id: stat.id, max }),
            placeholder: 'Max',
            disabled,
          }}
        />
      </div>
      <div className={styles.small}>
        <Input
          domProps={{
            type: 'checkbox',
            value: stat.visible,
            checked: stat.visible,
            onChange: visible => updateStat({ id: stat.id, visible }),
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

export default StatRow
