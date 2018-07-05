import React from 'react'
import classnames from 'classnames'
import GameService from 'services/GameService'
import Button from 'components/common/Button'
import styles from './styles.scss'

const GameTransition = ({
  visible,
  errors,
  transitionId,
  text,
}) => {
  const className = classnames(styles.component, {
    [styles.disabled]: errors.length > 0,
  })
  if (!visible) return null 
  return (
    <Button 
      domProps={{
        onClick: () => !!transition.toPage && GameService.changePageAndApplyEffects(transitionId),
      }}
      className={className}
    >
      {text}
      {errors.map(error => <div className={styles.error}>{error.message}</div>)}
    </Button>
  )
}

export default GameTransition

