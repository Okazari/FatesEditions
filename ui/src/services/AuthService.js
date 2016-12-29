export class AuthService {
  login(credentials) {
    return fetch('/api/login', { 
      method: 'POST', 
      body: JSON.stringify(credentials),
      headers: {
        'Content-Type': 'application/json',
      }
    })
  }

  subscribe(credentials) {
    return fetch('/api/subscribe', { 
      method: 'POST', 
      body: JSON.stringify(credentials),
      headers: {
        'Content-Type': 'application/json',
      }
    })
  }
}

export default new AuthService()