import React from 'react'
import classnames from 'classnames'

const Icon = ({ icon, domProps }) => {
  const className = classnames(domProps && domProps.className, 'material-icons')
  return (
    <i {...domProps} className={className}>{icon}</i>
  )
}

export default Icon
