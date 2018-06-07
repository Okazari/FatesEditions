import React from 'react'
import styles from './styles.scss'
import GamePage from './GamePage'
// import GameTree from './GameTree'

class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPageId: props.game.currentPageId,
      hoverNode: null,
    }
  }

  componentWillUpdate(nextProps) {
    const { currentPageId } = this.state
    if (nextProps.game && currentPageId === null) {
      this.setState({ currentPageId: nextProps.game.currentPageId })
    }
  }

  hoverTransition = (hoverNode) => {
    this.setState({ hoverNode })
  }

  outTransition = () => {
    this.setState({ hoverNode: null })
  }

  changePage = (currentPageId) => {
    const { game } = this.props
    this.setState({ currentPageId })
  }

  render() {
    const { game, onClose, updateResource } = this.props
    const { currentPageId, hoverNode } = this.state
    return !!currentPageId && (
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <GamePage
            page={game.book.pages.find(page => page.id === currentPageId)}
            hoverTransition={this.hoverTransition}
            outTransition={this.outTransition}
            changePage={this.changePage}
          />
        </div>
      </div>
    )
  }
}

export default Game
