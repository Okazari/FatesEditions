import React from 'react'
import styles from './styles.scss'
import GamePage from './GamePage'
// import GameTree from './GameTree'

// TODO: Refactor this Statefull comp to a Recompose HOC Structure
class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // currentPageId: props.currentPageId,
      hoverNode: null,
    }
  }

  // TODO: Refactor to shouldComponent Update
  // componentWillUpdate(nextProps) {
  //   const { currentPageId } = this.state
  //   if (nextProps.currentPageId && currentPageId === null) {
  //     this.setState({ currentPageId: nextProps.currentPageId })
  //   }
  // }

  hoverTransition = (hoverNode) => {
    this.setState({ hoverNode })
  }

  outTransition = () => {
    this.setState({ hoverNode: null })
  }

  // changePage = (currentPageId) => {
  //   const { game } = this.props
  //   this.setState({ currentPageId })
  // }

  render() {
    const { hoverNode } = this.state
    return (
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <GamePage
            // page={game.book.entities.page[currentPageId]}
            hoverTransition={this.hoverTransition}
            outTransition={this.outTransition}
            // changePage={this.changePage}
          />
        </div>
      </div>
    )
  }
}

export default Game
