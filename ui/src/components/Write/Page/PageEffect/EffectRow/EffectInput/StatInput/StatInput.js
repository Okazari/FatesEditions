import React from 'react'
import { RowInput, SelectInput } from '../../../../../../common'
import styles from './styles.scss'

const StatInput = ({ stats, effect, updateResource }) => {
  return (
    <div className={styles.component}>
      <SelectInput className={styles.selectInput} resource={effect} resourceHandler={updateResource} domProps={{ name: 'subject' }}>
        {stats.map(stat => <option value={stat._id}>{stat.name}</option>)}
      </SelectInput>
      <SelectInput
        className={styles.selectInput}
        resource={effect}
        resourceHandler={updateResource}
        domProps={{ name: 'operator' }}
      >
        <option value="aff">Prends la valeur de</option>
        <option value="dec">diminue de</option>
        <option value="div">est divisé par</option>
        <option value="inc">augmente de</option>
        <option value="mul">est multiplié par</option>
      </SelectInput>
      <RowInput
        className={styles.input}
        domProps={{ type: 'number', name: 'value', placeholder: 'Valeur de la condition' }}
        resource={effect}
        resourceHandler={updateResource}
      />
    </div>
  )
}

export default StatInput
