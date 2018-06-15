import { combineReducers } from 'redux'

const stat = (state = {}, { type, id, value }) => {
  switch (type) {
    case 'ADD_STAT':
      return ({
        ...state,
        [id]: value,
      })
    default:
      return state;
  }
}

const object = (state = [], action) => {
  switch (action.type) {
    case 'ADD_OBJECT':
      return ([...state, action.objectId])
    case 'REMOVE_OBJECT':
      return state.filter(id => id !== objectId)
    default:
      return state    
    }
  }
}

const book = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return ({...action.book})
    default:
      return state    
    }
  }
}

const pageId = (state = '', action) => {
  switch(action.type) {
    case: 'CURRENT_PAGE_ID',
      return currentPageId
    default:
      return state
  }
}

const gameId = (state = '', action) => {
  switch(action.type) {
    case: 'GAME_ID',
      return gameId
    default:
      return state
  }
}

export default combineReducers(
  stat,
  object,
  book,
  pageId
)