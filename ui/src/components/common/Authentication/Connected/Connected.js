import React from 'react'

const Connected = ({ children }) => {
  const connected = localStorage.getItem('auth-token')
  if (!connected) return null
  return (
    <div>
      {children}
    </div>
  )
}
export default Connected
