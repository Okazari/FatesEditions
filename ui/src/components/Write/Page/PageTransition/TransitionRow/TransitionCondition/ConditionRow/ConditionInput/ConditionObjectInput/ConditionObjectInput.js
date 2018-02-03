import React from 'react'
import { SelectInput } from 'components/common'
import styles from './styles.scss'

const ConditionObjectInput = ({ objects, condition, index, updateCondition }) => {
  return (
    <div className={styles.component}>
      <SelectInput
        debounce={500}
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
        debounce={500}
        domProps={{
          value: condition.value,
          onChange: value => updateCondition({ value }),
        }}
      >
        <option disabled value="">Choisir un opérateur</option>
        <option value="doNotOwn">{"n'est pas possédé"}</option>
        <option value="own">est possédé</option>
      </SelectInput>
    </div>
  )
}

export default ConditionObjectInput
