import React from 'react'

const BoxHeader = ({ children, withBorder, className }) => {
  let classes = 'box-header '
  if (withBorder) classes += 'with-border '
  if (className) classes += ` ${className}`
  return (
    <div className={classes}>
      {children}
    </div>
  )
}

export default BoxHeader
