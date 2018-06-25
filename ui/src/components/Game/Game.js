import React from 'react'
import styles from './styles.scss'
import GamePage from './GamePage'
// import GameTree from './GameTree'

// TODO: Refactor this Statefull comp to a Recompose HOC Structure
class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hoverNode: null,
    }
  }

  hoverTransition = (hoverNode) => {
    this.setState({ hoverNode })
  }

  outTransition = () => {
    this.setState({ hoverNode: null })
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <GamePage
            hoverTransition={this.hoverTransition}
            outTransition={this.outTransition}
          />
        </div>
      </div>
    )
  }
}

export default Game
