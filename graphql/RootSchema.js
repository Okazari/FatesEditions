const { makeExecutableSchema } = require('graphql-tools')
const Book = require('../models/BookModel')
const Page = require('../models/PageModel')
const Stat = require('../models/StatModel')
const ObjectModel = require('../models/ObjectModel')
const { getProjection } = require('./Helpers')

const bookType = `
  name: String
  tags: [String]
  synopsis: String
  cover: String
  startingPageId: ID
  genreId: ID
  authorId: ID
  draft: Boolean
  creationDate: String
  lastModificationDate: String
  revision: Int
`

const statType = `
  name: String
  description: String
  initValue: Int
  max: Int
  min: Int
  visible: Boolean
`

const objectType = `
  name: String
  description: String
  atStart: Boolean
  visible: Boolean
`

const pageType = `
  title: String
  text: String
  description: String
  backgroundMusic: String
`

const typeDefs = `
  type Book {
    id: ID
    ${bookType}
    stats: [Stat]
    objects: [Object]
    pages: [Page]
  }

  input BookInput {
    id: ID!
    ${bookType}
  }

  type Stat {
    id: ID
    ${statType}
  }

  input StatInput {
    id: ID!
    ${statType}
  }

  type Object {
    id: ID
    ${objectType}
  }

  input ObjectInput {
    id: ID!
    ${objectType}
  }

  type Page {
    id: ID
    ${pageType}
    effects: [Effect]
    transitions: [Transition]
  }

  input PageInput {
    id: ID!
    ${pageType}
  }

  type Effect {
    id: ID
    operator: String
    subject: String
    value: String
    type: String
  }

  type Transition {
    id: ID
    fromPage: ID
    toPage: ID
    text: String
    conditionOperator: String
    effects: [Effect]
    conditions: [Effect]
  }

  type Query {
    books(author: ID, draft: Boolean): [Book]
    book(id: ID!): Book
    page(bookId: ID!, pageId: ID!): Page
  }

  type Mutation {
    createBook(author: ID!): Book
    updateBook(book: BookInput!): Book
    deleteBook(id: ID!): ID

    createPage(bookId: ID!): Book
    updatePage(bookId: ID!, page: PageInput!): Page
    deletePage(bookId: ID!, pageId: ID!): Book

    createStat(bookId: ID!): Book
    updateStat(bookId: ID!, stat: StatInput!): Book
    deleteStat(bookId: ID!, statId: ID!): Book

    createObject(bookId: ID!): Book
    updateObject(bookId: ID!, object: ObjectInput!): Book
    deleteObject(bookId: ID!, objectId: ID!): Book
  }
`

const createBookSubRessource = (key, bookId, ressource) => {
  return Book.findById(bookId).then(book => {
    book[key].push(ressource)
    return book.save()
  })
}

const updateBookSubRessource = (key, bookId, ressource) => {
  return Book.findById(bookId).then(book => {
    const index = book[key].findIndex(r => r.id === ressource.id)
    Object.assign(book[key][index], ressource)
    return book.save()
  })
}

const deleteBookSubRessource = (key, bookId, ressourceId) => {
  return Book.findById(bookId).then(book => {
    book[key] = book[key].filter(r => r.id !== ressourceId)
    return book.save()
  })
}

const resolvers = {
  Query: {
    book: (obj, args = {}, context, info) => {
      const projections = getProjection(info)
      const { id } = args
      const filters = {}
      if (id) filters._id = id
      return Book.findOne(filters, projections)
    },
    books: (obj, args = {}, context, info) => {
      const projections = getProjection(info)
      const { author, draft } = args
      const filters = {}
      if (author) filters.authorId = author
      if (typeof draft === 'boolean') filters.draft = draft
      return Book.find(filters, projections)
    },
    page: (obj, { bookId, pageId }, context, info) => Book.findById(bookId).then(book => book.pages.id(pageId)),
  },
  Mutation: {
    createBook: (_, { author }) => {
      const book = new Book()
      book.authorId = author
      return book.save()
    },
    updateBook: (_, { book }) => Book.findByIdAndUpdate(book.id, book, { new: true }),
    deleteBook: (_, { id }) => Book.findByIdAndRemove(id).then(book => book._id),

    createStat: (_, { bookId }) => createBookSubRessource('stats', bookId, new Stat()),
    updateStat: (_, { bookId, stat }) => updateBookSubRessource('stats', bookId, stat),
    deleteStat: (_, { bookId, statId }) => deleteBookSubRessource('stats', bookId, statId),

    createPage: (_, { bookId }) => createBookSubRessource('pages', bookId, new Page()),
    updatePage: (_, { bookId, page }) => updateBookSubRessource('pages', bookId, page).then(b => b.pages.id(page.id)),
    deletePage: (_, { bookId, pageId }) => deleteBookSubRessource('pages', bookId, pageId),

    createObject: (_, { bookId }) => createBookSubRessource('objects', bookId, new ObjectModel()),
    updateObject: (_, { bookId, object }) => updateBookSubRessource('objects', bookId, object),
    deleteObject: (_, { bookId, objectId }) => deleteBookSubRessource('objects', bookId, objectId),
  }
}

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})

module.exports = schema
