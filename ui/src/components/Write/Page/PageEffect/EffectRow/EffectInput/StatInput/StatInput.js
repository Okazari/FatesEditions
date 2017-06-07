import React from 'react'
import { Input, SelectInput } from '../../../../../../common'
import styles from './styles.scss'

const StatInput = ({ stats, effect, index, updateResource }) => {
  return (
    <div className={styles.component}>
      <SelectInput
        debounce={500}
        className={styles.selectInput}
        domProps={{
          value: effect.subject,
          onChange: subject => updateResource(index, { ...effect, subject }),
        }}
      >
        {stats.map(stat => <option value={stat._id}>{stat.name}</option>)}
      </SelectInput>
      <SelectInput
        className={styles.selectInput}
        debounce={500}
        domProps={{
          value: effect.operator,
          onChange: operator => updateResource(index, { ...effect, operator }),
        }}
      >
        <option value="aff">Prends la valeur de</option>
        <option value="dec">diminue de</option>
        <option value="div">est divisé par</option>
        <option value="inc">augmente de</option>
        <option value="mul">est multiplié par</option>
      </SelectInput>
      <Input
        className={styles.input}
        debounce={500}
        domProps={{
          type: 'number',
          value: effect.value,
          onChange: value => updateResource(index, { ...effect, value }),
          placeholder: 'Valeur de la condition',
        }}
      />
    </div>
  )
}

export default StatInput
