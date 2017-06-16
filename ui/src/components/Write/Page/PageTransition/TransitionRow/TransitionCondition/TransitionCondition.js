import React from 'react'
import { Button, SelectInput } from '../../../../../common'
import ConditionRow from './ConditionRow'
import styles from './styles.scss'

const TransitionCondition = ({ book, transition, index, updateResource }) => {
  const addCondition = () => {
    transition.conditions = transition.conditions.concat({})
    updateResource(index, transition)
  }

  const updateCondition = (conditionIndex, condition) => {
    transition.conditions[conditionIndex] = condition
    updateResource(index, transition)
  }

  const removeCondition = (conditionIndex) => {
    transition.conditions.splice(conditionIndex, 1)
    updateResource(index, transition)
  }

  return (
    <div>
      <div className={styles.conditionHeader}>
        <span className={styles.title}>Conditions</span>
        <span> Opérateur de condition : </span>
        <SelectInput
          debounce={500}
          domProps={{
            value: transition.conditionOperator,
            onChange: conditionOperator =>
              updateResource(index, { ...transition, conditionOperator }),
          }}
        >
          <option value="and">ET</option>
          <option value="or">OU</option>
        </SelectInput>
      </div>
      <div className={styles.conditionEffect}>
        {transition.conditions.map((condition, conditionIndex) =>
          <ConditionRow
            key={condition._id}
            book={book}
            condition={condition}
            index={conditionIndex}
            updateResource={updateCondition}
            removeCondition={removeCondition}
          />)}
        <Button
          className="btn-xs md-whiteframe-z1"
          domProps={{ onClick: addCondition }}
        >
          {'Ajouter une Condition'}
        </Button>
      </div>
    </div>
  )
}

export default TransitionCondition
