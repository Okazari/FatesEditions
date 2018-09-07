import { AuthService } from 'services'
import RouteService from './RouteService'

export default {
  fetch(route, options = {}) {
    const surchargedOptions = {
      ...options,
      credentials: 'include',
      headers: options.headers || {},
    }
    const token = window.localStorage.getItem('auth-token')
    if (token) surchargedOptions.headers.Authorization = token

    // Server call, return a promise
    return fetch(route, surchargedOptions).then((response) => {
      const authToken = response.headers.get('auth-token')
      if (authToken) {
        AuthService.setToken(authToken)
      }
      if (response.status === 401) {
        RouteService.redirect401()
        return Promise.reject(401)
      }
      return response
    })
  },
}
