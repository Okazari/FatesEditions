export const changeGameState = ({ currentPageId, id, objects, stats, playerId }) => ({
  type: 'GAME_STATE',
  currentPageId,
  id,
  objects,
  stats,
  playerId,
})

export const initBook = normalizedBook => ({
  type: 'INIT_BOOK',
  ...normalizedBook,
})
