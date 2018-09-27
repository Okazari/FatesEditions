import React from 'react'
import posed from 'react-pose'
import classnames from 'classnames'
import { Button } from 'components/common'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './style.scss'

const AnimatedButton = posed.div({
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
})

const RollButton = ({ onClick, result, className }) => {
  const buttonClassName = classnames(styles.component, styles.jiggle, className)

  const resultClassName = classnames(styles.result, {
    [styles.displayResult]: result !== null,
  })

  const diceClassName = classnames(styles.dice, {
    [styles.displayDice]: result !== null,
  })

  return (
    <AnimatedButton>
      <Button
        domProps={{
          onClick,
        }}
        className={buttonClassName}
      >
        <div className={resultClassName}>
          {result !== null ? result : '20'}
        </div>
        <FontAwesomeIcon
          icon={'dice'}
          className={diceClassName}
        />
      </Button>
    </AnimatedButton>
  )
}

export default RollButton
