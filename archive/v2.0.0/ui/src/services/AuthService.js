class AuthService {
  getUser = () => {
    const token = this.getToken()
    if (!token) return undefined
    return JSON.parse(window.atob(token.split('.')[1])).user
  }

  setToken = (token) => {
    window.localStorage.setItem('auth-token', token)
  }

  getToken = () => {
    return window.localStorage.getItem('auth-token')
  }

  removeToken = () => {
    window.localStorage.removeItem('auth-token')
  }

  logout = () => {
    this.removeToken()
    return Promise.resolve(true)
  }
}

export default new AuthService()
