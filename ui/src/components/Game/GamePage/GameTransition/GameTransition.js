import React from 'react'
import classnames from 'classnames'
import Button from 'components/common/Button'
import styles from './styles.scss'

const GameTransition = ({ transition, hoverTransition, outTransition, changePage }) => {
  const onClick = () => transition.toPage && changePage(transition.toPage)
  const className = classnames(styles.transitionButton, { 
    [styles.disabled]: transition.toPage === null
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
