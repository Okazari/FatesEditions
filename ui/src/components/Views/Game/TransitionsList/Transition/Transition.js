import React from 'react'
import classnames from 'classnames'
import { Button } from 'components/common'
import RollButton from './RollButton'
import styles from './style.scss'

class Transition extends React.Component {
  constructor(props) {
    super(props)
    const { delay } = props
    this.state = {
      displayed: false,
    }
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
      transition,
      errors,
      game,
    } = this.props

    const { displayed } = this.state

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
          {transition.text}
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
        {
          transition.roll && transition.roll.active &&
          <RollButton
            stats={game.stats}
            roll={transition.roll}
            displayed={displayed}
          />
        }
      </div>
    )
  }
}
export default Transition
