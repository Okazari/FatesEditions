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
      if (response.status === 401) {
        RouteService.redirect401()
        return Promise.reject(401)
      }
      return response
    })
  },
}
