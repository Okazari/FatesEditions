import React from 'react'

const Button = ({ children, className = '', domProps }) => {
  return (
    <button {...domProps} className={`btn btn-primary ${className}`} > {children} </button>
  )
}

export default Button
