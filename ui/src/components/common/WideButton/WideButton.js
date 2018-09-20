import React from 'react'
import classnames from 'classnames'
import { Button } from 'components/common'
import styles from './style.scss'

const WideButton = (props) => {
  const className = classnames(styles.wideButton, props.className)
  return (
    <Button
      {...props}
      className={className}
    />
  )
}

export default WideButton
