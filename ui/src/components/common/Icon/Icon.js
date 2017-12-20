import React from 'react'
import classnames from 'classnames'
import styles from './styles.scss'

const Icon = ({ icon, domProps }) => {
  const className = classnames(domProps && domProps.className, 'material-icons', styles.icon)
  return (
    <i {...domProps} className={className}>{icon}</i>
  )
}

export default Icon
