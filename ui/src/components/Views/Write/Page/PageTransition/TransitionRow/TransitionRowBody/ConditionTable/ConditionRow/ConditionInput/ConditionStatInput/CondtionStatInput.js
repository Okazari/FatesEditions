import React from 'react'
import { Input, SelectInput } from 'components/common'
import EffectService from 'services/EffectService'
import styles from './styles.scss'

const statConditions = EffectService.condition.stat

const ConditionStatInput = ({ stats, condition, index, updateCondition }) => {
  return (
    <div className={styles.component}>
      <SelectInput
        className={styles.selectInput}
        domProps={{
          value: condition.subject,
          onChange: subject => updateCondition({ subject }),
        }}
      >
        <option disabled value="">Choisir une statistique</option>
        {stats.map(stat => <option value={stat.id} key={stat.id}>{stat.name}</option>)}
      </SelectInput>
      <SelectInput
        className={styles.selectInput}
        domProps={{
          value: condition.operator,
          onChange: operator => updateCondition({ operator }),
        }}
      >
        <option disabled value="">Choisir un opérateur</option>
        {
          Object.entries(statConditions).map(([key, statModel]) => {
            if (typeof statModel === 'object') {
              return <option key={key} value={key}>{statModel.label}</option>
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
          value: condition.value,
          onChange: value => updateCondition({ value }),
          placeholder: 'Valeur de la condition',
        }}
      />
    </div>
  )
}

export default ConditionStatInput
