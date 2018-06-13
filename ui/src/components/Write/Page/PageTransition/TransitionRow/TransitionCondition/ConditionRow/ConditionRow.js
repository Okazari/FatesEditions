import React from 'react'
import { SelectInput } from 'components/common'
import EffectService from 'services/EffectService'
import ConditionInput from './ConditionInput'
import styles from './styles.scss'

const ConditionRow = ({ book, condition, index, updateCondition, removeCondition }) => {
  const _updateCondition = _condition => updateCondition({ id: condition.id, ..._condition })
  const effectService = EffectService.condition
  return (
    <div className={styles.component}>
      <div>
        <SelectInput
          className={styles.selectInput}
          domProps={{
            value: condition.type,
            onChange: type => _updateCondition({
              type,
              operator: null,
              value: null,
              subject: null,
            }),
          }}
        >
          <option disabled value="">{"Source de l'effet"}</option>
          {
            Object.entries(effectService).map((keyValue) => {
              if (typeof keyValue[1] === 'object') {
                return <option key={keyValue[0]} value={keyValue[0]}>{keyValue[1].label}</option>
              }
              return null
            })
          }
        </SelectInput>
        <ConditionInput
          book={book}
          type={condition.type}
          condition={condition}
          index={index}
          updateCondition={_updateCondition}
          removeCondition={removeCondition}
        />
      </div>
    </div>
  )
}

export default ConditionRow
