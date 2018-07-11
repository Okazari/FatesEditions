import { combineReducers } from 'redux'

const game = (state = {}, action) => {
  switch (action.type) {
    case 'SET_BOOK':
      return ({
        ...state,
        book: {
          ...action.normalizedBook,
        },
      })
    case 'SET_GAME':
      return ({
        ...state,
        ...action.newGame,
      })
    default:
      return state
  }
}

export default combineReducers({
  game,
})
