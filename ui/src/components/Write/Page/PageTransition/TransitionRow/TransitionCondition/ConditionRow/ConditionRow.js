import React from 'react'
import { SelectInput } from 'components/common'
import ConditionInput from './ConditionInput'
import styles from './styles.scss'

const ConditionRow = ({ book, condition, index, updateCondition, removeCondition }) => {
  const _updateCondition = _condition => updateCondition({ id: condition.id, ..._condition })
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
          <option value="object">{"L'objet"}</option>
          <option value="stat">La statistique</option>
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
