const headers = {
  'Content-Type': 'application/json',
}

const handleResponse = response => {
  if (response.status >= 400) {
    throw { status: response.status }
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
  }

  subscribe(subscriber) {
    if(Object.keys(this.map).length == 0) this.update()
    this.subscribers.push(subscriber)
  }

  notify() {
    this.subscribers.map(subscriber => subscriber.next(this.map))
  }

  notifyError(error) {
    this.subscribers.map(subscriber => subscriber.error(error))
    return []
  }

  update() {
    this.fetch(this.url, { headers })
    .then(this.handleResponse)
    .catch(error => this.notifyError(error))
    .then(resources => {
      resources.forEach(
        (resource) => {
          if(!this.map[resource.id]) this.map[resource.id] = new Resource(`${this.url}/${resource.id}`, resource, this.fetch)
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
    .then(data => {
      this.map[data.id] = new Resource(`${this.url}/${data.id}`, {...resource, id: data.id}, this.fetch)
      this.notify()
    })
  }

  updateResource(resource) {
    this.getById(resource.id).put(resource)
  }

  deleteResource(resourceId) {
    this.getById(resourceId).delete().then(() => {
      delete this.map[resourceId]
      this.notify()
    })
  }
}

export default ResourceService