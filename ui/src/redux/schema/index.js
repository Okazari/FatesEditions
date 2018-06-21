import { schema } from 'normalizr'

export const author = new schema.Entity('author')
export const object = new schema.Entity('object')
export const stat = new schema.Entity('stat')
export const effect = new schema.Entity('effect')
export const condition = new schema.Entity('condition')
export const transition = new schema.Entity('transition', {
  conditions: [condition],
  effects: [effect],
})
export const page = new schema.Entity('page', {
  effects: [effect],
  transitions: [transition],
})
export const tag = new schema.Entity('tag')
export const book = new schema.Entity('book', {
  author,
  objects: [object],
  stats: [stat],
  pages: [page],
  tags: [tag],
})
