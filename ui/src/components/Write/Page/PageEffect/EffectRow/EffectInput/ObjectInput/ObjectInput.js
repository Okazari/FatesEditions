import React from 'react'
import { SelectInput } from '../../../../../../common'
import styles from './styles.scss'

const ObjectInput = ({ objects, effect, updateResource }) => {
  return (
    <div className={styles.component}>
      <SelectInput className={styles.selectInput} resource={ effect } resourceHandler={ updateResource } domProps={{ name:'subject'}} >
        {objects.map(object => <option value={object._id}>{object.name}</option>)}
      </SelectInput>
      <SelectInput className={styles.selectInput} resource={ effect } resourceHandler={ updateResource } domProps={{ name: 'operator' }}>
        <option value='add'>est ajouté</option>
        <option value='remove'>est retiré</option>
      </SelectInput>
    </div>
  )
}

export default ObjectInput
