import React from 'react'
import classnames from 'classnames'
import Button from 'components/common/Button'
import styles from './styles.scss'

const GameTransition = ({ transition, hoverTransition, outTransition, changePage }) => {
  let onClick = () => changePage(transition.toPage)
  let className = styles.transitionButton
  let errorMessage

  // change onClick and Style
  if (transition.toPage === null) {
    onClick = () => {}
    className = classnames(styles.transitionButton, styles.disabled)
    errorMessage = <div>Page de destination manquante</div>
  }

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
      {errorMessage}
    </Button>
  )
}

export default GameTransition
