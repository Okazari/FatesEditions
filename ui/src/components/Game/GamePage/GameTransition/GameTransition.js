import React from 'react'
import classnames from 'classnames'
import EffectService from 'services/EffectService'
import Button from 'components/common/Button'
import styles from './styles.scss'

const GameTransition = ({
  transition,
  stats,
  objects,
  pageEffects,
  hoverTransition,
  outTransition,
  changeGameState,
}) => {
  let incompleteCondition = false
  const defaultBool = transition.conditionOperator === 'and'
  const evaluateCondition = ({ type, operator, subject, value }) => {
    if (!type || !operator || !subject) {
      incompleteCondition = true
      return defaultBool
    }
    if (type === 'stat') {
      if (!value) {
        incompleteCondition = true
        return defaultBool
      }
      return EffectService.condition[type][operator].exec(stats[subject], value)
    }
    if (type === 'object') {
      return EffectService.condition[type][operator].exec(subject, objects)
    }
    incompleteCondition = true
    return defaultBool
  }

  const visible = transition.conditionOperator === 'and'
    ? transition.conditions.reduce(
      (acc, condition) => acc && evaluateCondition(condition),
      defaultBool,
    )
    : transition.conditions.reduce(
      (acc, condition) => acc || evaluateCondition(condition),
      defaultBool,
    )

  if (!visible) return null

  const _changePage = (currentPageId) => {
    let newStats = { ...stats }
    let newObjects = [...objects]

    const applyEffect = ({ type, subject, operator, value }) => {
      if (type === 'stat') {
        newStats = {
          ...newStats,
          [subject]: EffectService.effect[type][operator].exec(stats[subject], value),
        }
      }
      if (type === 'object') {
        newObjects = EffectService.effect[type][operator].exec(subject, newObjects)
      }
    }
    transition.effects.forEach(applyEffect)
    pageEffects.forEach(applyEffect)
    changeGameState({ currentPageId, stats: newStats, objects: newObjects })
  }

  const onClick = () => transition.toPage && _changePage(transition.toPage)
  const className = classnames(styles.component, {
    [styles.disabled]: transition.toPage === null,
    [styles.disabled]: incompleteCondition,
  })

  return (
    <Button
      domProps={{
        onMouseOver: () => hoverTransition(transition.toPage),
        onMouseOut: () => outTransition(),
        onClick,
      }}
      className={className}
    >
      {transition.text}
      {!transition.toPage && <div>Page de destination manquante</div>}
      {!!incompleteCondition && <div>Condition incomplète</div>}
    </Button>
  )
}

export default GameTransition

