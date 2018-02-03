import React from 'react'
import { SelectInput } from 'components/common'
import ConditionInput from './ConditionInput'
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
          <option disabled value="">{"Source de l'effet"}</option>
          <option value="object">{"L'objet"}</option>
          <option value="stat">La statistique</option>
        </SelectInput>
        <ConditionInput
          book={book}
          type={condition.type}
          condition={condition}
          index={index}
          updateResource={updateResource}
          removeCondition={removeCondition}
        />
      </div>
    </div>
  )
}

export default ConditionRow
