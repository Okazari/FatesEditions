export const setGame = newGame => ({
  type: 'SET_GAME',
  newGame,
})

export const initBook = normalizedBook => ({
  type: 'INIT_BOOK',
  normalizedBook,
})
