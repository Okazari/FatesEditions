import React from 'react'

const Disconnected = ({ children }) => {
  const connected = localStorage.getItem('auth-token')
  if (connected) return null
  return children
}

export default Disconnected
