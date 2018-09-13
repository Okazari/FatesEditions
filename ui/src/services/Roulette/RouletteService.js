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
    return Math.floor(Math.random() * (max + 1 - min)) + min
  }

  getShuffledArray = (min, max, result) => {
    const array = shuffle(
      Array.from(
        new Array(max + 1 - min),
        (val, index) => index + min,
      ),
    )
    array.unshift(array.splice(array.findIndex(elem => elem === result), 1)[0])
    array.splice(20, array.length)
    return array
  }

  launchRoulette = (min, max) => {
    return new Promise((resolve) => {
      const result = this.getRandomNumber(min, max)
      this._setState({
        visible: true,
        values: this.getShuffledArray(min, max, result),
        onComplete: () => {
          this._setState({
            visible: false,
          })
          resolve(result)
        },
      })
    })
  }
}

export default new RouletteService()
