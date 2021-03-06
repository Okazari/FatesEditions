import React from 'react'

const getDisplayName = c => c.displayName || c.name || 'Component'

const RestHOC = (Component, ResourceService) => {
  return class extends React.Component {
    static displayName = `RestHoc(${getDisplayName(Component)})`

    constructor(props) {
      super(props)
      const { query } = props
      this.state = {
        query,
      }
    }

    componentDidMount() {
      const { query } = this.props
      const resourceId = this.props[`${ResourceService.options.name.single}Id`]
      if (resourceId) {
        const resource = ResourceService.getById(resourceId)
        this.state = {
          resource: resource.value,
        }
        this.observer = {
          // eslint-disable-next-line
          next: resource => this.setState({ resource }),
          error: error => this.setState({ error }),
        }
        this.observable = resource
        this.subscribe()
      } else {
        this.observer = {
          next: resources => this.setState({
            resources,
          }),
          error: error => this.setState({ error }),
        }
        this.observable = ResourceService
        this.subscribe(query)
      }
    }

    componentWillUnmount() {
      this.unsubscribe(this.props.query)
    }

    componentWillUpdate(nextProps, nextState) {
      const { query } = nextProps
      if (query !== this.props.query) {
        this.unsubscribe(this.props.query)
        this.subscribe(query)
      }
      const nextResourceId = nextProps[`${ResourceService.options.name.single}Id`]
      if (nextResourceId !== this.props[`${ResourceService.options.name.single}Id`]) {
        this.unsubscribe()
        const resource = ResourceService.getById(nextResourceId)
        this.observable = resource
        this.setState({ resource: resource.value })
        this.subscribe()
      }
    }

    subscribe(query) {
      this.observable.subscribe(this.observer, query)
    }

    unsubscribe(query) {
      this.observable.unsubscribe(this.observer, query)
    }

    postResource = (newResource) => {
      return ResourceService.postResource(newResource)
    }

    updateResource = (updatedResource, options) => {
      ResourceService.updateResource(updatedResource, options)
    }

    deleteResource = (resourceId) => {
      ResourceService.deleteResource(resourceId)
    }

    render() {
      const injectedProps = {
        postResource: this.postResource,
        updateResource: this.updateResource,
        deleteResource: this.deleteResource,
        error: this.error,
      }
      if (this.state.resource) {
        injectedProps[ResourceService.options.name.single] = this.state.resource
      }
      if (this.state.resources) {
        injectedProps[ResourceService.options.name.plural] = this.state.resources
      }
      return (
        <Component
          {...injectedProps}
          {...this.props}
        />

      )
    }
  }
}

export default RestHOC
