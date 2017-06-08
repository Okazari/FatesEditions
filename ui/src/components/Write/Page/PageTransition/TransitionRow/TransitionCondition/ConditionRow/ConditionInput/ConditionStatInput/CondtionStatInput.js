import React from 'react'
import { Input, SelectInput } from '../../../../../../../../common'
import styles from './styles.scss'

const ConditionStatInput = ({ stats, condition, index, updateResource }) => {
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
        {stats.map(stat => <option value={stat._id}>{stat.name}</option>)}
      </SelectInput>
      <SelectInput
        className={styles.selectInput}
        debounce={500}
        domProps={{
          value: condition.operator,
          onChange: operator => updateResource(index, { ...condition, operator }),
        }}
      >
        <option value="equal">est égale à</option>
        <option value="less">est inférieur</option>
        <option value="lessOrEqual">est inférieur ou égale à</option>
        <option value="more">est supérieur à</option>
        <option value="moreOrEqual">est supérieur ou égale à</option>
        <option value="notEqual">est différent de</option>
      </SelectInput>
      <Input
        className={styles.input}
        debounce={500}
        domProps={{
          type: 'number',
          value: condition.value,
          onChange: value => updateResource(index, { ...condition, value }),
          placeholder: 'Valeur de la condition',
        }}
      />
    </div>
  )
}

export default ConditionStatInput
