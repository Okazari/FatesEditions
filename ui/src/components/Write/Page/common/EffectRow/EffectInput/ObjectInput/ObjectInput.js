import React from 'react'
import { SelectInput } from 'components/common'
import EffectService from 'services/EffectService'
import styles from './styles.scss'

const ObjectInput = ({ objects, effect, index, updateEffect }) => {
  const effectService = EffectService.effect.object
  return (
    <div className={styles.component}>
      <SelectInput
        className={styles.selectInput}
        domProps={{
          value: effect.subject,
          onChange: subject => updateEffect({ subject }),
        }}
      >
        <option disabled value="">Choisir un objet</option>
        {objects.map(object => <option key={object.id} value={object.id}>{object.name}</option>)}
      </SelectInput>
      <SelectInput
        className={styles.selectInput}
        domProps={{
          value: effect.value,
          onChange: value => updateEffect({ value }),
        }}
      >
        <option disabled value="">Choisir un operateur</option>
        {
          Object.entries(effectService).map((keyValue) => {
            if (typeof keyValue[1] === 'object') {
              return <option value={keyValue[1].value}>{keyValue[1].label}</option>
            }
            return null
          })
        }
      </SelectInput>
      <div className={styles.selectInput} />
    </div>
  )
}

export default ObjectInput
