import React from 'react'
import { Input, SelectInput } from 'components/common'
import styles from './styles.scss'

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
          onChange: value => updateCondition({ value }),
          placeholder: 'Valeur de la condition',
        }}
      />
    </div>
  )
}

export default ConditionStatInput
