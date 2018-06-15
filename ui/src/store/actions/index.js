export const addStat = ({ id, value }) => ({
  type: 'STAT',
  id,
  value,
})

export const addObject = objectId => ({
  type: 'ADD_OBJECT',
  objectId
})

export const removeObject = objectId => ({
  type: 'REMOVE_OBJECT',
  objectId
})

export const addBook = book => ({
  type: 'ADD_BOOK',
  book
})

export const currentPageId = currentPageId => ({
  type: 'CURRENT_PAGE_ID',
  currentPageId,
})

export const gameId = gameId => ({
  type: 'GAME_ID',
  gameId
})