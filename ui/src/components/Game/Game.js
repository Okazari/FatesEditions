import React from 'react'
import styles from './styles.scss'
import GamePage from './GamePage'
import GameTree from './GameTree'

class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPageId: null,
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
    const { game, updateResource } = this.props
    game.currentPageId = currentPageId
    updateResource(game)
    this.setState({ currentPageId })
  }

  render() {
    const { game, onClose, updateResource } = this.props
    const { currentPageId, hoverNode } = this.state

    return !!currentPageId && (
      <div className={styles.wrapper}>
        <div className={styles.leftSide}>
          <GameTree
            game={game}
            currentPageId={currentPageId}
            hoverNode={hoverNode}
            updateResource={updateResource}
          />
        </div>
        <div className={styles.rightSide}>
          <div className={styles.content}>
            <div className={styles.close} onClick={onClose}>
              x
            </div>
            <GamePage
              page={game.book.pages.find(page => page._id === currentPageId)}
              hoverTransition={this.hoverTransition}
              outTransition={this.outTransition}
              changePage={this.changePage}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Game
