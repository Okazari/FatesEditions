import React from 'react'
import { SelectInput } from 'components/common'
import styles from './styles.scss'

const ConditionObjectInput = ({ objects, condition, index, updateResource }) => {
  return (
    <div className={styles.component}>
      <SelectInput
        debounce={500}
        className={styles.selectInput}
        domProps={{
          value: condition.subject,
          onChange: subject => updateResource(index, { ...condition, subject }),
        }}
      >
        {objects.map(object => <option value={object._id}>{object.name}</option>)}
      </SelectInput>
      <SelectInput
        className={styles.selectInput}
        debounce={500}
        domProps={{
          value: condition.value,
          onChange: value => updateResource(index, { ...condition, value }),
        }}
      >
        <option value="doNotOwn">{'n\'est pas possédé'}</option>
        <option value="own">est possédé</option>
      </SelectInput>
    </div>
  )
}

export default ConditionObjectInput
