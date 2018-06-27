import React from 'react'
import classnames from 'classnames'
import GameService from 'services/GameService'
import Button from 'components/common/Button'
import styles from './styles.scss'

const GameTransition = ({
  transition,
  pageEffects,
  hoverTransition,
  outTransition,
}) => {
  const { isVisible, incompleteCondition } = GameService.checkTransitionVisibility(transition)
  if (!isVisible) return null

  // move this to his HOC
  const effects = [...transition.effects, ...pageEffects]

  const onClick = () =>
    transition.toPage && GameService.changePageAndApplyEffects(transition.toPage, effects)
  const className = classnames(styles.component, {
    [styles.disabled]: transition.toPage === null || incompleteCondition,
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

