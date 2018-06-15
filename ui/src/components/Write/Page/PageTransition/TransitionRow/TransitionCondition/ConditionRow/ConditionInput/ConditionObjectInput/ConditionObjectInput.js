import React from 'react'
import { SelectInput } from 'components/common'
import EffectService from 'services/EffectService'
import styles from './styles.scss'

const objectConditions = EffectService.condition.object

const ConditionObjectInput = ({ objects, condition, index, updateCondition }) => {
  return (
    <div className={styles.component}>
      <SelectInput
        className={styles.selectInput}
        domProps={{
          value: condition.subject,
          onChange: subject => updateCondition({ subject }),
        }}
      >
        <option disabled value="">Choisir un objet</option>key
        {
          objects.map(object => (
            <option
              key={object.id}
              value={object.id}
            >
              {object.name}
            </option>
          ))
        }
      </SelectInput>
      <SelectInput
        className={styles.selectInput}
        domProps={{
          value: condition.value,
          onChange: value => updateCondition({ value }),
        }}
      >
        <option disabled value="">Choisir un opérateur</option>
        {
          Object.entries(objectConditions).map(([key, conditionModel]) => {
            if (typeof conditionModel === 'object') {
              return <option key={key} value={key}>{conditionModel.label}</option>
            }
            return null
          })
        }
      </SelectInput>
      <div className={styles.selectInput} />
    </div>
  )
}

export default ConditionObjectInput
