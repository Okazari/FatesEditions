import React from 'react'
import { Button, SelectInput } from 'components/common'
import EffectService from 'services/EffectService'
import ConditionRow from './ConditionRow'
import styles from './styles.scss'

const operatorConditions = EffectService.conditionOperator

const TransitionCondition = ({
  book,
  transition,
  pageId,
  addCondition,
  removeCondition,
  updateTransition,
}) => {
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
              updateTransition({ conditionOperator }),
          }}
        >
          {
            Object.entries(operatorConditions).map(([key, operatorModel]) => {
              if (typeof operatorModel === 'object') {
                return <option key={key} value={key}>{operatorModel.label}</option>
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
