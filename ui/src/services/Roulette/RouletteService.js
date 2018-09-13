import shuffle from 'lodash.shuffle'

class RouletteService {
  constructor() {
    this.state = {
      visible: false,
    }
  }

  _subscribe = (observer) => {
    this._observer = observer
    this._notify()
  }

  _unsubscribe = () => {
    this._observer = null
  }

  _notify = () => {
    this._observer.next(this._state)
  }

  _setState = (state) => {
    this._state = {
      ...this._state,
      ...state,
    }
    this._notify()
  }

  getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min)
  }

  // TODO: getShuffledArray
  getShuffledArray = (min, max, result) => {
    const array = shuffle(
      Array.from(
        newArray(max - min),
        (val, index) => index + min,
      )
    )
    array.unshift(array.splice(array.findIndex(result), 1))
    return array
  } 

  launchRoulette = (min, max) => {
    return new Promise(resolve => {
      const result = getRandomNumber(min, max)
      this._setState({
        visible: true,
        values: getShuffledArray(min, max, result),
        onComplete: () => {
          this._setState({ visible: false })
          resolve(result)
        }
      })
    })
  }
}

export default new RouletteService()

