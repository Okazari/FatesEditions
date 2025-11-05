class RouletteService {
  
  constructor() {
    this._state = {
      visible: false,
    }
  }
  
  _subscribre = (observer) => {
    this._observer = observer
    this._notify()
  }

  _unsubscribe = (observer) => {
    this._observer = null
  }

  _notify = () => {
    this._observer.next(this._state)
  }

  _setState = (state) => {
    this._state = {
      ...this._state,
      ...state
    }
    this._notify()
  }

  launchRoulette = (min, max, animation) => {
    return new Promise(resolve => {
      const number = getRandomNumber(min, max)
      this._setState({ 
        visible: true, 
        target: number, 
        values: [],
        onComplete: () => {
          this._setState({ visible: false })
          resolve(number)
        } 
      })
    })
  }
}


export default RouletteService
export const RouletteContainer
export const Roulette


import { RouletteContainer } from 'react-rolls'

<App>
  <RollContainer />
</App>



import { RouletteService } from 'react-rolls'

RouletteService.launchRoulette(diceLaunch.min, diceLaunch.max)
               .then(number)

class RouletteContainer extends React.Component {
  componentDidMount() {
    RouletteService.subscribre({
      next: state => this.setState(state),
      error: () => {}
    })
  }

  onClick = () => {
    this.state.onComplete()
  }

  render() {
    return <Roulette
            onComplete={this.state.onComplete} 
           />
  }
}