import React from 'react'
import classnames from 'classnames'
import styles from './styles.scss'
import Button from '../Button'
import Icon from '../Icon'

const ButtonIcon = ({ icon, className, domProps }) => {
  const finalClassName = classnames(styles.component, className)
  return (
    <Button domProps={domProps} className={finalClassName} >
      <Icon icon={icon} />
    </Button>
  )
}

export default ButtonIcon
