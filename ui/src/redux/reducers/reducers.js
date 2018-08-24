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
    case 'PANEL_STATE':
      return ({
        ...state,
        panelIsOpen: action.panelIsOpen,
      })
    default:
      return state
  }
}

export default combineReducers({
  game,
  ui,
})
