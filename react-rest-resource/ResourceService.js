const headers = {
  'Content-Type': 'application/json',
}

const debug = false

const info = (...log) => {
  //eslint-disable-next-line
  if (debug) console.info(...log)
}

const handleResponse = (response) => {
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
    //eslint-disable-next-line
    if (!!initialValue) {
      this.value = initialValue
    } else {
      this.update()
    }
  }

  subscribe(subscriber) {
    this.subscribers.push(subscriber)
    subscriber.next(this.value)
  }

  unsubscribe(subscriber) {
    const subscriberIndex = this.subscribers.indexOf(subscriber)
    this.subscribers = this.subscribers.splice(subscriberIndex + 1, 1)
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

  patch(resource) {
    return this.fetch(this.url, { method: 'PATCH', headers, body: JSON.stringify(resource) })
      .then(this.handleResponse)
      .catch(error => this.notifyError(error))
  }

  put(resource) {
    return this.fetch(this.url, { method: 'PUT', headers, body: JSON.stringify(resource) })
      .then(this.handleResponse)
      .catch(error => this.notifyError(error))
      .then(() => this.setResource(resource))
  }

  delete() {
    return this.fetch(this.url, { method: 'DELETE', headers })
      .then(this.handleResponse)
      .catch(error => this.notifyError(error))
  }
}

class ResourceService {

  constructor(url, options) {
    this.fetch = options.proxy ? options.proxy : fetch.bind(window)
    this.options = options
    this.url = url
    this.handleResponse = handleResponse.bind(this)
    this.map = {}
    this.observableMap = {}
    this.lock = false
  }

  subscribe(subscriber, query) {
    const queryKey = this.getQueryParamsKey(query)
    info('Subscribing to', queryKey)
    this.checkInitObservable(queryKey, query)
    if (!this.observableMap[queryKey].lock) {
      this.observableMap[queryKey].lock = true
      this.update(query).then((data) => {
        this.observableMap[queryKey].lock = false
        return data
      })
      this.notify(queryKey)
    } else {
      const { value } = this.observableMap[queryKey]
      subscriber.next(value)
    }
    this.observableMap[queryKey].subscribers.push(subscriber)
  }

  unsubscribe(subscriber, query) {
    const queryKey = this.getQueryParamsKey(query)
    info('Unsubscribing to', queryKey)
    const subscriberIndex = this.observableMap[queryKey].subscribers.indexOf(subscriber)
    const subscribers = this.observableMap[queryKey].subscribers
    this.observableMap[queryKey].subscribers = subscribers.splice(subscriberIndex + 1, 1)
  }

  notify(queryParams) {
    const { subscribers, value } = this.observableMap[queryParams]
    subscribers.map(subscriber => subscriber.next(value))
  }

  notifyError(queryParams, error) {
    this.observableMap[queryParams].subscribers.map(subscriber => subscriber.error(error))
    return []
  }

  checkInitObservable(queryKey, query) {
    if (!this.observableMap[queryKey]) {
      info('Initialize', queryKey)
      this.observableMap[queryKey] = {
        value: [],
        subscribers: [],
        query,
      }
    }
  }

  getQueryParamsKey = (query = {}) => {
    return Object.keys(query).sort().reduce((previous, key) => {
      return `${previous}${previous === '' ? '' : '&'}${key}=${query[key]}`
    }, '')
  }

  update(query = {}) {
    const queryParams = this.getQueryParamsKey(query)
    const urlToCall = `${this.url}${queryParams ? '?' : ''}${queryParams}`
    return this.fetch(urlToCall, { headers })
    .then(this.handleResponse)
    .catch(error => this.notifyError(queryParams, error))
    .then((resources) => {
      info('Updating', queryParams)
      this.observableMap[queryParams].value = resources.map(
        (resource) => {
          const resourceId = resource[this.options.name.id || 'id']
          if (!this.map[resourceId]) this.map[resourceId] = new Resource(`${this.url}/${resourceId}`, resource, this.fetch)
          return resourceId
        },
      )
      this.notify(queryParams)
    })
  }

  getById(id) {
    if (!this.map[id]) this.map[id] = new Resource(`${this.url}/${id}`, null, this.fetch)
    return this.map[id]
  }

  postResource(resource) {
    return this.fetch(this.url, {
        method: 'POST',
        headers,
        body: JSON.stringify(resource),
      })
      .then(handleResponse)
      .then((data) => {
        this.map[data.id] = new Resource(`${this.url}/${data.id}`, { ...resource, id: data.id }, this.fetch)
        Object.keys(this.observableMap).forEach(key => this.update(this.observableMap[key].query))
        return data
      })
  }

  updateResource(resource, patch) {
    const resourceId = resource[this.options.name.id || 'id']
    if (patch) this.getById(resourceId).patch(resource)
    else this.getById(resourceId).put(resource)
  }

  deleteResource(resourceId) {
    this.getById(resourceId).delete().then(() => {
      Object.keys(this.observableMap).forEach((key) => {
        const map = this.observableMap[key]
        if (map.value.find(id => id === resourceId)) {
          this.observableMap[key].value = map.value.filter(id => id !== resourceId)
          this.notify(key)
        }
      })
    })
  }
}

export default ResourceService