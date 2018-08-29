import React from 'react'
import classnames from 'classnames'
import Button from 'components/common/Button'
import styles from './styles.scss'

const GameTransition = ({
  visible,
  onClick,
  text,
  errors,
}) => {
  const className = classnames(styles.component, {
    [styles.disabled]: errors.length > 0,
  })
  if (!visible) return null
  return (
    <Button
      domProps={{
        onClick,
      }}
      className={className}
    >
      {text}
      {
        errors.map(error => <div
          className={styles.error}
          key={
            `${error.message}${error.columnNumber}-${error.lineNumber}`
          }
        >{error.message}</div>)}
    </Button>
  )
}

export default GameTransition

