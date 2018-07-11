import { normalize } from 'normalizr'
import { bookSchema } from 'redux/schema'

export const setGame = newGame => ({
  type: 'SET_GAME',
  newGame,
})

export const setBook = book => ({
  type: 'SET_BOOK',
  normalizedBook: normalize(book, bookSchema).entities,
})
