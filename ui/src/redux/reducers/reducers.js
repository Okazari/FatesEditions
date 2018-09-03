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

const ui = (state = {}, action) => {
  switch (action.type) {
    case 'SWITCH_PANEL': {
      const result = {
        ...state,
        panelState: action.key,
      }
      if (state.panelState === action.key) {
        result.panelState = null
      }
      return result
    }
    default:
      return state
  }
}

export default combineReducers({
  game,
  ui,
})
