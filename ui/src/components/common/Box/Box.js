import React from 'react'

const Box = ({ children, className }) => {
  return (
    <div className={`box ${className}`}>
      {children}
    </div>
  )}

export default Box
