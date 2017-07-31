import React from 'react'
import ConditionInput from './ConditionInput'
import { SelectInput } from '../../../../../../common'
import styles from './styles.scss'

const ConditionRow = ({ book, condition, index, updateResource, removeCondition }) => {
  const updateType = (type) => {
    condition.type = type
    updateResource(index, condition)
  }

  return (
    <div className={styles.component}>
      <div>
        <SelectInput
          className={styles.selectInput}
          debounce={1}
          domProps={{
            value: condition.type,
            onChange: type => updateType(type),
          }}
        >
          <option value="object">{'L\'objet'}</option>
          <option value="stat">{'La statistique'}</option>
        </SelectInput>
        { condition.type !== '' ?
          <ConditionInput
            book={book}
            type={condition.type}
            condition={condition}
            index={index}
            updateResource={updateResource}
            removeCondition={removeCondition}
          />
          : null }
      </div>
    </div>
  )
}

export default ConditionRow
