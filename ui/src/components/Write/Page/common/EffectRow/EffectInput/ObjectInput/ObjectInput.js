import React from 'react'
import { SelectInput } from 'components/common'
import EffectService from 'services/EffectService'
import styles from './styles.scss'

const objectEffect = EffectService.effect.object

const ObjectInput = ({ objects, effect, index, updateEffect }) => {
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
          onChange: operator => updateEffect({ operator }),
        }}
      >
        <option disabled value="">Choisir un operateur</option>
        {
          Object.entries(objectEffect).map(([key, effectModel]) => {
            if (typeof effectModel === 'object') {
              return <option key={key} value={key}>{effectModel.label}</option>
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
