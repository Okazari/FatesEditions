import React from 'react'

const Box = ({ children }) => {
  return (
    <div className="box">
      <div className="box-body">
        {children}
      </div>
    </div>
  )
}

export default Box
