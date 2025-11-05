import React from 'react'
import classnames from 'classnames'
import styles from './styles.scss'

const Icon = ({ icon, domProps, className }) => {
  const finalClassName = classnames(domProps && domProps.className, className, 'material-icons', styles.icon)
  return <i {...domProps} className={finalClassName}>{icon}</i>
}

export default Icon
