import React from 'react'
import RouletteService from './RouletteService'
import Roulette from './Roulette'

class RouletteContainer extends React.Component {
  state = {
    visible: false,
  }

  componentDidMount() {
    RouletteService._subscribe({
      next: state => this.setState(state),
      error: () => {},
    })
  }

  onClick = () => this.state.onComplete()

  render() {
    const { visible, values } = this.state
    return (
      <Roulette
        onClick={this.onClick}
        visible={visible}
        values={values}
      />
    )
  }
}

export default RouletteContainer
