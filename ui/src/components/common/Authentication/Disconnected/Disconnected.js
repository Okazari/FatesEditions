import { AuthService } from 'services'

const Disconnected = ({ children }) => {
  const connected = AuthService.getToken()
  if (connected) return null
  return children
}

export default Disconnected
