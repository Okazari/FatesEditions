import React from 'react'
import { AuthService } from 'services'

const Connected = ({ children }) => {
  const connected = AuthService.getToken()
  if (!connected) return null
  return (
    <div>
      {children}
    </div>
  )
}
export default Connected
