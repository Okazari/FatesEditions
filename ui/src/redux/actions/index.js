export const setGame = state => ({
  type: 'SET_GAME',
  ...state,
})

export const initBook = normalizedBook => ({
  type: 'INIT_BOOK',
  ...normalizedBook,
})
