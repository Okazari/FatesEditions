import React from 'react'
import { Input, SelectInput } from 'components/common'
import { EffectService } from 'services'
import styles from './style.scss'

const rollModifiers = EffectService.roll

const RollRow = ({ book, roll, update }) => {
  const _roll = {
    active: false,
    min: null,
    max: null,
    modifier: '',
    stat: '',
    ...roll,
  }

  const _update = rollData => update({ roll: { ...rollData } })

  return (
    <div className={styles.component}>
      <span>Lancer de dé</span>
      <div className={styles.row}>
        <Input
          className={styles.small}
          domProps={{
            type: 'checkbox',
            value: _roll.active,
            checked: _roll.active,
            onChange: active => _update({ active }),
          }}
        />
        <Input
          classname={styles.input}
          debounce={500}
          domProps={{
            type: 'number',
            value: _roll.min,
            onChange: min => _update({ min }),
            placeholder: 'min',
          }}
        />
        <Input
          classname={styles.input}
          debounce={500}
          domProps={{
            type: 'number',
            value: _roll.max,
            onChange: max => _update({ max }),
            placeholder: 'max',
          }}
        />
        <SelectInput
          debounce={500}
          className={styles.selectInput}
          domProps={{
            value: _roll.modifier,
            onChange: modifier => _update({ modifier }),
          }}
        >
          <option disabled value="">Choisir un operateur</option>
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
            value: _roll.stat,
            onChange: stat => _update({ stat }),
          }}
        >
          <option disabled value="">Choisir une statistique</option>
          {book.stats.map(({ id, name }) => <option key={id} value={id}>{name}</option>)}
        </SelectInput>
      </div>
    </div>
  )
}

export default RollRow
