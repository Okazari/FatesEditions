const { makeExecutableSchema } = require('graphql-tools')
const Book = require('../models/BookModel')
const Page = require('../models/PageModel')
const Stat = require('../models/StatModel')
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

const typeDefs = `
  type Query {
    books(author: ID, draft: Boolean): [Book]
    book(id: ID): Book
  }

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
    stats: [StatInput]
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
    name: String
    description: String
    atStart: Boolean
    visible: Boolean
  }

  type Page {
    id: ID
    title: String
    text: String
    description: String
    backgroundMusic: String
    effects: [Effect]
    transitions: [Transition]
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

  type Mutation {
    createBook(author: ID!): Book
    deleteBook(id: ID!): ID
    updateBook(book: BookInput!): Book

    createPage(book: BookInput!): Book

    createStat(bookId: ID!): Book
    deleteStat(bookId: ID!, statId: ID!): Book
    updateStat(bookId: ID!, stat: StatInput!): Book
  }
`

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
    }
  },
  Mutation: {
    createBook: (_, { author }) => {
      const book = new Book()
      book.authorId = author
      book.draft = true
      return book.save()
    },
    deleteBook: (_, { id }) => Book.findByIdAndRemove(id).then(book => book._id),
    updateBook: (_, { book }) => Book.findByIdAndUpdate(book.id, book, { new: true }),

    createPage: (_, { bookId }) => {
      const page = new Page()
      return Book.findById(bookId).then(book => {
        book.pages.push(page)
        return book.save()
      })
    },

    createStat: (_, { bookId }) => {
      const stat = new Stat()
      return Book.findById(bookId).then(book => {
        book.stats.push(stat)
        return book.save()
      })
    },
    deleteStat: (_, { bookId, statId }) => {
      const stat = new Stat()
      return Book.findById(bookId).then(book => {
        book.stats = book.stats.filter(s => s.id !== statId)
        return book.save()
      })
    },
    updateStat: (_, { bookId, stat }) => {
      return Book.findById(bookId).then(book => {
        const index = book.stats.findIndex(s => s.id === stat.id)
        console.log(book.stats[index], stat)
        Object.assign(book.stats[index], stat)
        console.log(book.stats[index], stat)
        return book.save()
      })
    }
  }
}

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})

module.exports = schema
