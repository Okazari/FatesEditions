import React from 'react'
import { Input, SelectInput } from 'components/common'
import { EffectService } from 'services'
import styles from './style.scss'

const rollModifiers = EffectService.roll

const RollRow = ({ book, roll, updateRoll }) => {
  const _updateRoll = changes => updateRoll({ id: roll.id, ...changes })
  return (
    <div className={styles.component}>
      <Input
        debounce={500}
        className={styles.input}
        domProps={{
          type: 'number',
          value: roll.min,
          onChange: min => _updateRoll({ min }),
          placeholder: 'min',
        }}
      />
      <Input
        debounce={500}
        className={styles.input}
        domProps={{
          type: 'number',
          value: roll.max,
          onChange: max => _updateRoll({ max }),
          placeholder: 'max',
        }}
      />
      <SelectInput
        debounce={500}
        className={styles.selectInput}
        domProps={{
          value: roll.modifier,
          onChange: modifier => _updateRoll({ modifier }),
        }}
      >
        <option value="">sans modificateur</option>
        {
          Object.entries(rollModifiers).map(([key, effectModel]) => {
            if (typeof effectModel === 'object') {
              return <option key={key} value={key}>{effectModel.label}</option>
            }
            return null
          })
        }
      </SelectInput>
      <SelectInput
        debounce={500}
        className={styles.selectInput}
        domProps={{
          value: roll.stat,
          onChange: stat => _updateRoll({ stat }),
        }}
      >
        <option disabled value="">Choisir une statistique</option>
        {book.stats.map(({ id, name }) => <option key={id} value={id}>{name}</option>)}
      </SelectInput>
    </div>
  )
}

export default RollRow
