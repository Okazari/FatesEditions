import React from 'react'
import { SelectInput } from 'components/common'
import styles from './styles.scss'

const ObjectInput = ({ objects, effect, index, updateEffect }) => {
  return (
    <div className={styles.component}>
      <SelectInput
        debounce={500}
        className={styles.selectInput}
        domProps={{
          value: effect.subject,
          onChange: subject => updateEffect({ subject }),
        }}
      >
        <option disabled value="">Choisir un objet ou une compétence</option>
        {objects.map(object => <option key={object.id} value={object.id}>{object.name}</option>)}
      </SelectInput>
      <SelectInput
        className={styles.selectInput}
        debounce={500}
        domProps={{
          value: effect.value,
          onChange: value => updateEffect({ value }),
        }}
      >
        <option disabled value="">Choisir un operateur</option>
        <option value="add">est ajouté</option>
        <option value="remove">est retiré</option>
      </SelectInput>
      <div className={styles.selectInput} />
    </div>
  )
}

export default ObjectInput
