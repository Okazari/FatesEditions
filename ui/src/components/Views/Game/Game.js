import React from 'react'
import posed from 'react-pose'
import classnames from 'classnames'
import Panel from './Panel'
import Page from './Page'
import TransitionsList from './TransitionsList'
import styles from './style.scss'

const AnimatedFixedTransitions = posed.div({
  hidden: {
    width: '0%',
    transition: { duration: 0 },
  },
  visible: {
    width: '40%',
    transition: { duration: 300 },
  },
})

class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      bottomReached: false,
    }
    this.trackScrolling = this.trackScrolling.bind(this)
    this.resetScrolling = this.resetScrolling.bind(this)
  }

  componentDidMount() {
    this.gameWindow.addEventListener('scroll', this.trackScrolling)
    this.trackScrolling()
  }

  resetScrolling() {
    if (this.gameWindow) {
      this.gameWindow.scrollTop = 0
    }
    this.setState(
      { bottomReached: false },
      () => {
        this.gameWindow.addEventListener('scroll', this.trackScrolling)
        this.trackScrolling(500)
      },
    )
  }

  componentWillUnmout() {
    this.gameWindow.removeEventListener('scroll', this.trackScrolling)
  }

  isBottom = (el) => {
    return el.getBoundingClientRect().bottom <= window.innerHeight + 50
  }

  trackScrolling(timeOut) {
    const wrappedElement = document.getElementById('page')
    if (this.isBottom(wrappedElement)) {
      if (timeOut) {
        setTimeout(() => this.setState({ bottomReached: true }), timeOut)
      } else {
        this.setState({ bottomReached: true })
      }

      this.gameWindow.removeEventListener('scroll', this.trackScrolling)
    }
  }

  render() {
    const { panelState } = this.props
    const { bottomReached } = this.state
    const wrapperClassName = classnames(panelState && styles.panelIsOpen, styles.wrapper)
    return (
      <div
        className={styles.content}
        ref={(node) => {
          this.gameWindow = node
        }}
      >
        <Panel />
        <div className={wrapperClassName}>
          <Page resetScrolling={this.resetScrolling} />
          <TransitionsList
            className={styles.inFlowTransitions}
            visible={bottomReached}
          />
        </div>
        <AnimatedFixedTransitions
          className={styles.fixedTransitions}
          pose={bottomReached ? 'visible' : 'hidden'}
        >
          <TransitionsList
            visible={bottomReached}
          />
        </AnimatedFixedTransitions>
      </div>
    )
  }
}

export default Game
