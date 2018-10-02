import React from 'react'
import classnames from 'classnames'
import { Button } from 'components/common'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './style.scss'

const RollButton = ({ onClick, result, className }) => {
  const buttonClassName = classnames(styles.component, {
    [styles.jiggle]: !result,
  }, className)

  const resultClassName = classnames(styles.result, {
    [styles.displayResult]: result !== null,
  })

  const diceClassName = classnames(styles.dice, {
    [styles.displayDice]: result !== null,
  })

  return (
    <Button
      domProps={{
        onClick,
      }}
      className={buttonClassName}
    >
      <div className={resultClassName}>
        {result || '20'}
      </div>
      <FontAwesomeIcon
        icon={'dice'}
        className={diceClassName}
      />
    </Button>
  )
}

export default RollButton
