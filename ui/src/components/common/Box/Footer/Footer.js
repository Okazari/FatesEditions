import React from 'react'

const BoxFooter = ({ children, className }) => {
  let classes = 'box-footer'
  if (className) classes += ` ${className}`
  return (
    <div className={classes}>
      {children}
    </div>
  )
}

export default BoxFooter
