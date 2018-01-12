const { makeExecutableSchema } = require('graphql-tools')
const Book = require('../models/BookModel')
const { getProjection } = require('./Helpers')

const bookType = `
  id: ID
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

const typeDefs = `
  type Query {
    books(author: ID, draft: Boolean): [Book]
    book(id: ID): Book
  }

  type Book {
    ${bookType}
    stats: [Stat]
    objects: [Object]
    pages: [Page]
  }

  input BookInput {
    ${bookType}
  }

  type Stat {
    id: ID
    name: String
    description: String
    initValue: Int
    max: Int
    min: Int
    visible: Boolean
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
    createBook: (obj, args = {}, context, info) => {
      const book = new Book()
      const { author } = args
      book.authorId = author
      book.draft = true
      return book.save()
    },
    deleteBook: (obj, { id }) => Book.findByIdAndRemove(id).then(book => book._id),
    updateBook: (obj, { book }) => Book.findByIdAndUpdate(book.id, book, { new: true }),
  }
}

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})

module.exports = schema
