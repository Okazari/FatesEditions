class AuthService {

  // login = (credentials) => {
  //   return fetch('/api/login', {
  //     method: 'POST',
  //     body: JSON.stringify(credentials),
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   })
  // }

  // subscribe = (credentials) => {
  //   return fetch('/api/subscribe', {
  //     method: 'POST',
  //     body: JSON.stringify(credentials),
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   })
  // }

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
