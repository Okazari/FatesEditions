const headers = {
  'Content-Type': 'application/json',
}

const handleResponse = response => {
  if (response.status >= 400) {
    const error = { status: response.status }
    throw error
  }
  return response.json()
}

class Resource {
  constructor(url, initialValue, fetch) {
    this.fetch = fetch
    this.subscribers = []
    this.url = url
    this.handleResponse = handleResponse.bind(this)
    if(!!initialValue) {
      this.value = initialValue
    } else {
      this.update()
    }
  }

  subscribe(subscriber) {
    this.subscribers.push(subscriber)
  }

  setResource(resource) {
    this.value = resource
    this.subscribers.forEach(subscriber => subscriber.next(resource))
  }
  
  notifyError(error) {
    this.subscribers.map(subscriber => subscriber.error(error))
    return {}
  }

  update() {
    return this.fetch(this.url, { headers })
      .then(this.handleResponse)
      .catch(error => this.notifyError(error))
      .then(resource => this.setResource(resource))
  }

  put(resource) {
    return this.fetch(this.url, {method: 'PUT', headers, body: JSON.stringify(resource)})
      .then(this.handleResponse)
      .catch(error => this.notifyError(error))
      .then(() => this.setResource(resource))
  }

  delete() {
    return this.fetch(this.url, {method: 'DELETE', headers})
      .then(this.handleResponse)
      .catch(error => this.notifyError(error))
  }
}



class ResourceService {

  constructor(url, options) {
    this.fetch = options.proxy ? options.proxy : fetch
    this.options = options
    this.url = url
    this.handleResponse = handleResponse.bind(this)
    this.map = {}
    this.subscribers = []
    this.lock = false
  }

  subscribe(subscriber) {
    if(!this.lock && Object.keys(this.map).length === 0) {
      this.lock = true
      this.update().then(data => {
        this.lock = false
        return data
      })
    }
    this.subscribers.push(subscriber)
    console.log(this.subscribers)
  }

  unsubscribe(subscriber) {
    this.subscribers = this.subscribers.splice(this.subscribers.indexOf(subscriber) - 1, 1)
    console.log(this.subscribers)
  }

  notify() {
    this.subscribers.map(subscriber => subscriber.next(this.map))
  }

  notifyError(error) {
    this.subscribers.map(subscriber => subscriber.error(error))
    return []
  }

  update(query = {}) {
    const queryParams = Object.keys(query).reduce((previous, key) => {
      return `${ previous }${ previous === '' ? '' : '&' }${ key }=${ query[key] }`
    }, '')
    const urlToCall = `${this.url}${queryParams ? '?' : ''}${queryParams}`
    return this.fetch(urlToCall, { headers })
    .then(this.handleResponse)
    .catch(error => this.notifyError(error))
    .then(resources => {
      resources.forEach(
        (resource) => {
          const resourceId = resource[this.options.name.id || 'id']
          if(!this.map[resourceId]) this.map[resourceId] = new Resource(`${this.url}/${resourceId}`, resource, this.fetch)
        }
      )
      this.notify()
    })
  }

  getById(id) {
    if (!this.map[id]) this.map[id] = new Resource(`${this.url}/${id}`, null, this.fetch)
    return this.map[id]
  } 

  postResource(resource) {
    this.fetch(this.url, {
      method: 'POST',
      headers,
      body: JSON.stringify(resource)
    })
    .then(handleResponse)
    .catch(error => this.notifyError(error))
    .then(data => {
      this.map[data.id] = new Resource(`${this.url}/${data.id}`, {...resource, id: data.id}, this.fetch)
      this.notify()
    })
  }

  updateResource(resource) {
    const resourceId = resource[this.options.name.id || 'id']
    this.getById(resourceId).put(resource)
  }

  deleteResource(resourceId) {
    this.getById(resourceId).delete().then(() => {
      delete this.map[resourceId]
      this.notify()
    })
  }
}

export default ResourceService