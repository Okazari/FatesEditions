import React from 'react'
import classnames from 'classnames'
import posed from 'react-pose'
import { Button } from 'components/common'
import RollButton from '../RollButton'
import styles from './style.scss'

const AnimatedTransition = posed.div({
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    delayChildren: 300,
  },
})

const Transition = ({
  visible,
  onClick,
  transition,
  errors,
  game,
}) => {
  const className = classnames(styles.transition, {
    [styles.disabled]: errors.length > 0,
  })
  if (!visible) return null
  return (
    <AnimatedTransition className={styles.component}>
      <Button
        domProps={{
          onClick,
        }}
        className={className}
      >
        {transition.text}
        {
          errors.map(error => (
            <div
              className={styles.error}
              key={
                `${error.message}${error.columnNumber}-${error.lineNumber}`
              }
            >
              {error.message}
            </div>
          ))
        }
      </Button>
      {
        transition.roll && transition.roll.active &&
        <RollButton
          stats={game.stats}
          roll={transition.roll}
          className={styles.rollButton}
        />
      }
    </AnimatedTransition>
  )
}

export default Transition
