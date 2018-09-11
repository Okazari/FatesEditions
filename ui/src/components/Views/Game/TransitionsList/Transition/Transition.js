import React from 'react'
import classnames from 'classnames'
import { Button } from 'components/common'
import styles from './styles.scss'

class Transition extends React.Component {
  constructor(props) {
    super(props)
    const { delay } = props
    this.state = { displayed: false }
    this.timeOut = setTimeout(() => {
      this.setState({ displayed: true })
    }, delay)
  }

  componentWillUnmount() {
    clearTimeout(this.timeOut)
  }

  render() {
    const {
      visible,
      onClick,
      text,
      errors,
    } = this.props

    const { displayed } = this.state
    const className = classnames(styles.component, {
      [styles.disabled]: errors.length > 0,
      [styles.displayed]: displayed,
    })
    if (!visible) return null
    return (
      <div>
        <Button
          domProps={{
            onClick,
          }}
          className={className}
        >
          {text}
          {
            errors.map(error => <div
              className={styles.error}
              key={
                `${error.message}${error.columnNumber}-${error.lineNumber}`
              }
            >{error.message}</div>)}
        </Button>
      </div>
    )
  }
}
export default Transition

