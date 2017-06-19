import React from 'react'
import lodashDebounce from 'lodash.debounce'

const getDisplayName = c => c.displayName || c.name || 'Component'

const InputHoc = (WrappedInput) => {
  return class extends React.Component {
    static displayName = `NewInputHoc(${getDisplayName(WrappedInput)})`

    constructor(props) {
      super(props)
      const { domProps: { value }, debounce } = this.props
      if (debounce) {
        this.changeFn = lodashDebounce(this.changeFn, debounce)
      }
      this.state = {
        uncontrolled: !value,
        value: value || '',
        onChange: this.changeFn,
      }
    }

    changeFn = (newValue) => {
      const { domProps: { onChange } } = this.props
      if (onChange) onChange(newValue)
      this.setState({ debouncing: false })
    }

    componentWillUpdate(nextProps) {
      const { value, debouncing, uncontrolled } = this.state
      if (!uncontrolled && value !== nextProps.domProps.value && !debouncing) {
        this.setState({ value: nextProps.domProps.value })
      }
    }

    render() {
      const { domProps } = this.props
      const { value, onChange } = this.state
      const onInputChange = (e) => {
        let eventValue
        if (domProps.type === 'checkbox') eventValue = e.target.checked
        else eventValue = e.target.value
        this.setState({ debouncing: true, value: eventValue })
        onChange(eventValue)
      }
      return (<WrappedInput
        {...this.props}
        domProps={{ ...domProps, value, onChange: onInputChange }}
      />)
    }
  }
}

export default InputHoc
