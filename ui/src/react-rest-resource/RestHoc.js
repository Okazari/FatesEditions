import React from 'react'
import filter from 'lodash/filter'

const getDisplayName = (c) => c.displayName || c.name || 'Component'

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
          resource: resource.value
        }
        this.observer = {
          next: resource => this.setState({resource}),
          error: error => this.setState({error})
        }
        this.observable = resource
        this.subscribe()
      } else {
        this.observer = {
          next: resources => this.setState({
            resources: !query ? Object.keys(resources) : filter(resources, { value: this.props.query }).map(ressource => {
              const { options } = ResourceService
              const ressourceId = ressource.value[options.name.id ? options.name.id : 'id']
              return ressourceId
            })
          }),
          error: error => this.setState({error})
        }
        this.observable = ResourceService
        this.subscribe()
        if (query) ResourceService.update(query)
      }
    }

    componentWillUnmount() {
      this.unsubscribe()
    }

    subscribe() {
      this.observable.subscribe(this.observer)
    }

    unsubscribe() {
      this.observable.unsubscribe(this.observer)
    }

    postResource(newResource) {
      ResourceService.postResource(newResource)
    }
    
    updateResource(updatedResource) {
      ResourceService.updateResource(updatedResource)
    }
    
    deleteResource(resourceId) {
      ResourceService.deleteResource(resourceId)
    }

    componentWillUpdate(nextProps, nextState) {
      const { query } = nextProps
      if (query !== this.props.query) ResourceService.update(query)
    }

    render() {
      const injectedProps = {
        postResource: this.postResource,
        updateResource: this.updateResource,
        deleteResource: this.deleteResource,
        error: this.error,
      }
      if (this.state.resource) injectedProps[ResourceService.options.name.single] = this.state.resource
      if (this.state.resources) injectedProps[ResourceService.options.name.plural] = this.state.resources
      return <Component
              {...injectedProps}
              {...this.props}
            />
    }
  }
}

export default RestHOC