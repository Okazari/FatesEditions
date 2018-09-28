import React from 'react'
import { WideButton, SelectInput, AnimatedList } from 'components/common'
import { RowWithDeleteButton } from 'components/Views/Write/Page/common'
import EffectService from 'services/EffectService'
import ConditionRow from './ConditionRow'
import styles from './style.scss'

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
      <div className={styles.centerButton}>
        <WideButton
          className={styles.button}
          domProps={{
            onClick: addCondition,
          }}
        >
          {'Ajouter une Condition'}
        </WideButton>
      </div>
      <div className={styles.conditionHeader}>
        { transition.conditions.length > 0 &&
          <div>
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
        }
      </div>
      <div className={styles.conditionEffect}>
        <AnimatedList list={transition.conditions}>
          {
            (condition, conditionIndex) => (
              <RowWithDeleteButton removeRow={() => removeCondition(condition.id)}>
                <ConditionRow
                  book={book}
                  pageId={pageId}
                  transitionId={transition.id}
                  condition={condition}
                  index={conditionIndex}
                />
              </RowWithDeleteButton>
            )
          }
        </AnimatedList>
      </div>
    </div>
  )
}

export default ConditionTable
