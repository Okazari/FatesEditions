export class HttpService {

  fetch(route, options = {}) {
    const surchargedOptions = {
      ...options,
      credentials: 'include',
      headers: options.headers || {},
    }
    const token = window.localStorage.getItem('auth-token')
    if (token) surchargedOptions.headers.Authorization = token

    // Server call, return a promise
    return fetch(route, surchargedOptions)
  }
}

export default new HttpService()