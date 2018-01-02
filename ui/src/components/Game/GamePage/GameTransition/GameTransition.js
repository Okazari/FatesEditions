import React from 'react'
import Button from 'components/common/Button'
import styles from './styles.scss'

const GameTransition = ({ transition, hoverTransition, outTransition, changePage }) => {
  return (
    <Button
      domProps={{
        onMouseOver: () => hoverTransition(transition.toPage),
        onMouseOut: () => outTransition(),
        onClick: () => changePage(transition.toPage),
      }}
      className={styles.transitionButton}
    >
      {transition.text}
    </Button>
  )
}

export default GameTransition
