import React from 'react'
import classnames from 'classnames'

const BoxFooter = ({ children, className }) => {
  return (
    <div className={classnames('box-footer', className)}>
      {children}
    </div>
  )
}

export default BoxFooter
