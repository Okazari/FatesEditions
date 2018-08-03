import { AuthService } from 'services'

const Connected = ({ children }) => {
  const connected = AuthService.getToken()
  if (!connected) return null
  return children
}

export default Connected
