export const changeGameState = state => ({
  type: 'GAME_STATE',
  ...state,
})

export const initBook = normalizedBook => ({
  type: 'INIT_BOOK',
  ...normalizedBook,
})
