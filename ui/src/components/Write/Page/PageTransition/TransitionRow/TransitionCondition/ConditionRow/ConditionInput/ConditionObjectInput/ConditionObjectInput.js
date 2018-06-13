import React from 'react'
import { SelectInput } from 'components/common'
import EffectService from 'services/EffectService'
import styles from './styles.scss'

const ConditionObjectInput = ({ objects, condition, index, updateCondition }) => {
  const effectService = EffectService.condition.object
  return (
    <div className={styles.component}>
      <SelectInput
        className={styles.selectInput}
        domProps={{
          value: condition.subject,
          onChange: subject => updateCondition({ subject }),
        }}
      >
        <option disabled value="">Choisir un objet</option>
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
          Object.entries(effectService).map((keyValue) => {
            if (typeof keyValue[1] === 'object') {
              return <option key={keyValue[0]} value={keyValue[0]}>{keyValue[1].label}</option>
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
