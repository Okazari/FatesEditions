import React from 'react'
import { Input, SelectInput } from 'components/common'
import EffectService from 'services/EffectService'
import styles from './styles.scss'

const statEffect = EffectService.effect.stat

const StatInput = ({ stats, effect, index, updateEffect }) => {
  return (
    <div className={styles.component}>
      <SelectInput
        className={styles.selectInput}
        domProps={{
          value: effect.subject,
          onChange: subject => updateEffect({ subject }),
        }}
      >
        <option disabled value="">Choisir une statistique</option>
        {stats.map(stat => <option key={stat.id} value={stat.id}>{stat.name}</option>)}
      </SelectInput>
      <SelectInput
        className={styles.selectInput}
        domProps={{
          value: effect.operator,
          onChange: operator => updateEffect({ operator }),
        }}
      >
        <option disabled value="">Choisir un operateur</option>
        {
          Object.entries(statEffect).map(([key, effectModel]) => {
            if (typeof effectModel === 'object') {
              return <option key={key} value={key}>{effectModel.label}</option>
            }
            return null
          })
        }
      </SelectInput>
      <Input
        className={styles.input}
        debounce={500}
        domProps={{
          type: 'number',
          value: effect.value,
          onChange: value => updateEffect({ value }),
          placeholder: 'Valeur de la condition',
        }}
      />
    </div>
  )
}

export default StatInput
