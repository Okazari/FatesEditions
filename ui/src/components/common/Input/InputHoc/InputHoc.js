import React from 'react'
import debounce from 'lodash.debounce'

const getDisplayName = (c) => c.displayName || c.name || 'Component'

const InputHoc = (WrappedInput) => {
  return class extends React.Component {
    static displayName = `InputHoc(${getDisplayName(WrappedInput)})`

    constructor(props) {
      super(props);
      const { resource, resourceHandler, debounceTime } = this.props;
      this.state = { inputValue: '' };
      this.debounceUpdate = debounce(() => resourceHandler(resource, false), debounceTime ? debounceTime : 1000);
    }

    componentDidMount() {
      const { resource, domProps } = this.props;
      if(resource) {
        this.setState({ inputValue: resource[domProps.name] })
      }
    };

    componentDidUpdate(prevProps) {
      const { resource, domProps } = this.props;
      if(prevProps.resource !== resource) {
        this.setState({ inputValue: resource[domProps.name] });
      }
    };

    updateInput = (event) => {
      const { resource, domProps } = this.props;
      let targetValue;
      if(domProps.type === "checkbox") {
        targetValue = event.target.checked
      }
      else {
        targetValue = event.target.value
      }
      this.setState({ inputValue: targetValue });
      resource[domProps.name] = targetValue;
      this.debounceUpdate();
    };

    render() {
      return <WrappedInput injectedProps={{inputValue: this.state.inputValue, updateInput: this.updateInput}} {...this.props}/>
    };
  }
}

export default InputHoc
