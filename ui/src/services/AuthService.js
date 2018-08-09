class AuthService {
  getUser = () => {
    return JSON.parse(window.atob(this.getToken().split('.')[1]))
  }

  setToken = (token) => {
    window.localStorage.setItem('auth-token', token)
  }

  getToken = () => {
    return window.localStorage.getItem('auth-token')
  }

  removeToken = () => {
    window.localStorage.setItem('auth-token', '')
  }

  logout = () => {
    this.removeToken()
    return Promise.resolve(true)
  }
}

export default new AuthService()
