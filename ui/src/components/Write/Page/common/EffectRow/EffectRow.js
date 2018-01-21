import React from 'react'
import { SelectInput } from 'components/common'
import EffectInput from './EffectInput'
import styles from './styles.scss'

const EffectRow = ({ book, effect, index, updateEffect, removeEffect }) => {
  const doUpdateEffect = (changes) => {
    updateEffect({ id: effect.id, ...changes })
  }

  return !!book && (
    <div className={styles.component}>
      <div>
        <SelectInput
          className={styles.selectInput}
          debounce={1}
          domProps={{
            value: effect.type,
            onChange: type => doUpdateEffect({ type, value: '', operator: '', subject: '' }),
          }}
        >
          <option disabled value="">{"Source de l'effet"}</option>
          <option value="object">{"L'objet"}</option>
          <option value="stat">{'La statistique'}</option>
        </SelectInput>
        <EffectInput
          book={book}
          type={effect.type}
          effect={effect}
          index={index}
          updateEffect={doUpdateEffect}
          removeEffect={() => removeEffect(effect.id)}
        />
      </div>
    </div>
  )
}

export default EffectRow
