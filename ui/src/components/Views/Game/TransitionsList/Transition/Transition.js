import React from 'react'
import classnames from 'classnames'
import { Button } from 'components/common'
import { RouletteService } from 'services'
import RollButton from './RollButton'
import styles from './style.scss'

class Transition extends React.Component {
  constructor(props) {
    super(props)
    const { delay } = props
    this.state = {
      displayed: false,
      result: null,
    }
    this.timeOut = setTimeout(() => {
      this.setState({ displayed: true })
    }, delay)
    this.roll = this.roll.bind(this)
  }

  componentWillUnmount() {
    clearTimeout(this.timeOut)
  }

  roll() {
    RouletteService.launchRoulette(0, 20)
                   .then(result => this.setState({ result }))
  }

  render() {
    const {
      visible,
      onClick,
      text,
      errors,
    } = this.props

    const {
      displayed,
      result,
    } = this.state
    const className = classnames(styles.transition, {
      [styles.disabled]: errors.length > 0,
      [styles.displayed]: displayed,
    })
    if (!visible) return null
    return (
      <div className={styles.component}>
        <Button
          domProps={{
            onClick,
          }}
          className={className}
        >
          {text}
          {
            errors.map(error => (
              <div
                className={styles.error}
                key={
                  `${error.message}${error.columnNumber}-${error.lineNumber}`
                }
              >
                {error.message}
              </div>
            ))
          }
        </Button>
        <RollButton
          onClick={this.roll}
          result={result}
          displayed={displayed}
        />
      </div>
    )
  }
}
export default Transition
