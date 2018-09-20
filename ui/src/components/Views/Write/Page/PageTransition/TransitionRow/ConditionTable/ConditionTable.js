import React from 'react'
import { WideButton, SelectInput } from 'components/common'
import { RowWithDeleteButton } from 'components/Views/Write/Page/common'
import EffectService from 'services/EffectService'
import ConditionRow from './ConditionRow'
import styles from './styles.scss'

const operatorConditions = EffectService.conditionOperator

const ConditionTable = ({
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
            <RowWithDeleteButton
              key={condition.id}
              removeRow={() => removeCondition(condition.id)}
            >
              <ConditionRow
                book={book}
                pageId={pageId}
                transitionId={transition.id}
                condition={condition}
                index={conditionIndex}
              />
            </RowWithDeleteButton>,
          )
        }
        <WideButton
          className={styles.button}
          domProps={{
            onClick: addCondition,
          }}
        >
          {'Ajouter une Condition'}
        </WideButton>
      </div>
    </div>
  )
}

export default ConditionTable
