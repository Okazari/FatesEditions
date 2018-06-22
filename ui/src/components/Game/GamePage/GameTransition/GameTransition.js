import React from 'react'
import classnames from 'classnames'
import EffectService from 'services/EffectService'
import Button from 'components/common/Button'
import styles from './styles.scss'

// const isHidden = EffectService.condition[transition.conditions.type][transition.conditions.operator].exec(stats[transition.conditions.subject], transition.conditions.value)

const GameTransition = ({ transition, stats, objects, hoverTransition, outTransition, changePage }) => {

  console.log(transition.conditionOperator)
  
  const singleStatCondition = ({ type, operator, subject, value }) => {
      // TODO: Add error displaying
    if (!type || !operator || !subject || !value ) return true
    return EffectService.condition[type][operator].exec(stats[subject], value)
  }
  
  const notHidden = transition.conditionOperator == 'and' ?
    transition.conditions.reduce((acc, condition) => acc && singleStatCondition(condition), true) : 
    transition.conditions.reduce((acc, condition) => acc || singleStatCondition(condition), false)

  if (!notHidden) return null




  const onClick = () => transition.toPage && changePage(transition.toPage)
  const className = classnames(styles.transitionButton, {
    [styles.disabled]: transition.toPage === null,
    // [styles.hidden]: 
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
    </Button>
  )
}

export default GameTransition

