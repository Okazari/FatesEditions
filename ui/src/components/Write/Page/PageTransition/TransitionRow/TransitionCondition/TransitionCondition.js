import React from 'react'
import { Button, SelectInput } from 'components/common'
import EffectService from 'services/EffectService'
import ConditionRow from './ConditionRow'
import styles from './styles.scss'

const TransitionCondition = ({
  book,
  transition,
  pageId,
  index,
  addCondition,
  removeCondition,
  updateResource,
}) => {
  const updateCondition = (conditionIndex, condition) => {
    transition.conditions[conditionIndex] = condition
    updateResource(index, transition)
  }

  const effectService = EffectService.conditionOperator

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
          {
            Object.entries(effectService).map((keyValue) => {
              if (typeof keyValue[1] === 'object') {
                return <option value={keyValue[1].value}>{keyValue[1].label}</option>
              }
              return null
            })
          }
        </SelectInput>
      </div>
      <div className={styles.conditionEffect}>
        {
          transition.conditions.map((condition, conditionIndex) =>
            <ConditionRow
              key={condition.id}
              book={book}
              pageId={pageId}
              transitionId={transition.id}
              condition={condition}
              index={conditionIndex}
              updateResource={updateCondition}
              removeCondition={removeCondition}
            />,
          )
        }
        <Button
          className={styles.button}
          domProps={{
            onClick: addCondition,
          }}
        >
          {'Ajouter une Condition'}
        </Button>
      </div>
    </div>
  )
}

export default TransitionCondition
