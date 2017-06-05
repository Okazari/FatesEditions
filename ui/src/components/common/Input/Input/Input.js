import React from 'react'
import lodashDebounce from 'lodash.debounce'
import styles from './styles.scss'

class Input extends React.Component {

  constructor(props) {
    super(props)
    const { domProps: { onChange, value }, debounce } = this.props
    let changeFn = (newValue) => {
      if (onChange) onChange(newValue)
      this.setState({ debouncing: false })
    }
    if (debounce) {
      changeFn = lodashDebounce(changeFn, debounce)
    }
    this.state = {
      uncontrolled: !value,
      value: value || '',
      onChange: changeFn,
    }
  }

  componentWillUpdate(nextProps) {
    const { value, debouncing, uncontrolled } = this.state
    if (!uncontrolled && value !== nextProps.domProps.value && !debouncing) {
      this.setState({ value: nextProps.domProps.value })
    }
  }

  render() {
    const { domProps, label } = this.props
    const { value, onChange } = this.state
    const onInputChange = (e) => {
      this.setState({ debouncing: true, value: e.target.value })
      onChange(e.target.value)
    }
    return (
      <div className={styles.component}>
        <label htmlFor={domProps.id}>{label}</label>
        <input {...domProps} onChange={onInputChange} value={value} className={styles.input} />
      </div>
    )
  }
}

export default Input
