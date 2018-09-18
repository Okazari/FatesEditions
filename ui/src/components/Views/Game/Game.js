import React from 'react'
import classnames from 'classnames'
import Panel from './Panel'
import Page from './Page'
import TransitionsList from './TransitionsList'
import styles from './style.scss'

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
        this.trackScrolling()
      },
    )
  }

  componentWillUnmout() {
    this.gameWindow.removeEventListener('scroll', this.trackScrolling)
  }

  isBottom = (el) => {
    return el.getBoundingClientRect().bottom <= window.innerHeight + 50
  }

  trackScrolling() {
    const wrappedElement = document.getElementById('page')
    if (this.isBottom(wrappedElement)) {
      this.setState({ bottomReached: true })
      this.gameWindow.removeEventListener('scroll', this.trackScrolling)
    }
  }

  render() {
    const { panelState } = this.props
    const { bottomReached } = this.state
    const wrapperClassName = classnames(panelState && styles.panelIsOpen, styles.wrapper)
    const fixedClassName = classnames(
      bottomReached && styles.bottomReached,
      styles.fixedTransitions,
    )
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
          <div className={styles.inFlowTransitions}>
            <TransitionsList
              visible={bottomReached}
            />
          </div>
        </div>
        <div className={fixedClassName}>
          <TransitionsList
            visible={bottomReached}
          />
        </div>
      </div>
    )
  }
}

export default Game
