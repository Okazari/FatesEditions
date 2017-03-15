import React from 'react'

const BoxBody = ({ children, className }) => {
  let classes = 'box-body'
  if (className) classes += ` ${className}`
  return (
    <div className={classes}>
      {children}
    </div>
  )
}

export default BoxBody
