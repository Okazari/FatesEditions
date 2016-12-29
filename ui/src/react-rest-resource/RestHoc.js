import React from 'react'

const getDisplayName = (c) => c.displayName || c.name || 'Component'

const RestHOC = (Component, ResourceService) => {
  return class extends React.Component {
    static displayName = `RestHoc(${getDisplayName(Component)})`
    constructor(props) {
      super(props)
      this.state = {}
      const resourceId = props[`${ResourceService.options.name.single}Id`]
      if (resourceId) {
        const resource = ResourceService.getById(resourceId)
        this.state = {
          resource: resource.value
        }
        resource.subscribe({
          next: resource => this.setState({resource}),
          error: error => this.setState({error})
        })
      } else {
        ResourceService.subscribe({
          next: resources => this.setState({resources: Object.keys(resources)}),
          error: error => this.setState({error})
        })
      }
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