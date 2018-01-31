const { makeExecutableSchema } = require('graphql-tools')
const Book = require('../models/BookModel')
const Page = require('../models/PageModel')
const Stat = require('../models/StatModel')
const User = require('../models/UserModel')
const Effect = require('../models/EffectModel')
const Transition = require('../models/TransitionModel')
const ObjectModel = require('../models/ObjectModel')
const { getProjection } = require('./Helpers')

const bookType = `
  name: String
  tags: [String]
  synopsis: String
  cover: String
  startingPageId: ID
  genreId: ID
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

const effectType = `
  operator: String
  subject: String
  value: String
  type: String
`

const transitionType = `
  fromPage: ID
  toPage: ID
  text: String
  conditionOperator: String
`

const typeDefs = `
  type Book {
    id: ID
    ${bookType}
    author: User
    stats: [Stat]
    objects: [Object]
    pages: [Page]
  }

  type User {
    id: ID
    username: String
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
    ${effectType}
  }

  input EffectInput {
    id: ID!
    ${effectType}
  }

  type Transition {
    id: ID
    ${transitionType}
    effects: [Effect]
    conditions: [Effect]
  }

  input TransitionInput {
    id: ID!
    ${transitionType}
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

    createPageEffect(bookId: ID!, pageId: ID!): Page
    updatePageEffect(bookId: ID!, pageId: ID!, effect: EffectInput!): Effect
    deletePageEffect(bookId: ID!, pageId: ID!, effectId: ID!): Page

    createPageTransition(bookId: ID!, pageId: ID!): Page
    updatePageTransition(bookId: ID!, pageId: ID!, transition: TransitionInput!): Transition
    deletePageTransition(bookId: ID!, pageId: ID!, transitionId: ID!): Page

    createStat(bookId: ID!): Book
    updateStat(bookId: ID!, stat: StatInput!): Stat
    deleteStat(bookId: ID!, statId: ID!): Book

    createObject(bookId: ID!): Book
    updateObject(bookId: ID!, object: ObjectInput!): Object
    deleteObject(bookId: ID!, objectId: ID!): Book

    createPageTransitionEffect(bookId: ID!, pageId: ID!, transitionId: ID!): Transition,
    updatePageTransitionEffect(bookId: ID!, pageId: ID!, transitionId: ID!, effect: EffectInput!): Transition
    deletePageTransitionEffect(bookId: ID!, pageId: ID!, transitionId: ID!, effectId: ID!): Transition

    createPageTransitionCondition(bookId: ID!, pageId: ID!, transitionId: ID!): Transition,
    updatePageTransitionCondition(bookId: ID!, pageId: ID!, transitionId: ID!, condition: EffectInput!): Transition
    deletePageTransitionCondition(bookId: ID!, pageId: ID!, transitionId: ID!, conditionId: ID!): Transition

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
    return book.save().then(b => b[key].id(ressource.id))
  })
}

const deleteBookSubRessource = (key, bookId, ressourceId) => {
  return Book.findById(bookId).then(book => {
    book[key] = book[key].filter(r => r.id !== ressourceId)
    return book.save()
  })
}

const createBookPageSubRessource = (key, bookId, pageId, ressource) => {
  return Book.findById(bookId).then(book => {
    book.pages.id(pageId)[key].push(ressource)
    return book.save().then(b => b.pages.id(pageId))
  })
}

const updateBookPageSubRessource = (key, bookId, pageId, ressource) => {
  return Book.findById(bookId).then(book => {
    const index = book.pages.id(pageId)[key].findIndex(r => r.id === ressource.id)
    Object.assign(book.pages.id(pageId)[key][index], ressource)
    return book.save().then(b => b.pages.id(pageId)).then(p => p[key].id(ressource.id))
  })
}

const deleteBookPageSubRessource = (key, bookId, pageId, ressourceId) => {
  return Book.findById(bookId).then(book => {
    book.pages.id(pageId)[key] = book.pages.id(pageId)[key].filter(r => r.id !== ressourceId)
    return book.save().then(b => b.pages.id(pageId))
  })
}

const createBookPageTransitionSubRessource = (key, bookId, pageId, transitionId, ressource) => {
  return Book.findById(bookId).then(book => {
    book.pages.id(pageId).transitions.id(transitionId)[key].push(ressource)
    return book.save().then(b => b.pages.id(pageId)).then(p => p.transitions.id(transitionId))
  })
}

const updateBookPageTransitionSubRessource = (key, bookId, pageId, transitionId, ressource) => {
  return Book.findById(bookId).then(book => {
    const index = book.pages.id(pageId).transitions.id(transitionId)[key].findIndex(r => r.id === ressource.id)
    Object.assign(book.pages.id(pageId).transitions.id(transitionId)[key][index], ressource)
    return book.save().then(b => b.pages.id(pageId)).then(p => p.transitions.id(transitionId))
  })
}

const deleteBookPageTransitionSubRessource = (key, bookId, pageId, transitionId, ressourceId) => {
  return Book.findById(bookId).then(book => {
    book.pages.id(pageId).transitions.id(transitionId)[key] = book.pages.id(pageId).transitions.id(transitionId)[key].filter(r => r.id !== ressourceId)
    return book.save().then(b => b.pages.id(pageId)).then(p => p.transitions.id(transitionId))
  })
}

const resolvers = {
  Query: {
    book: (obj, args = {}, context, info) => {
      const projections = getProjection(info)
      if (projections.author) projections.authorId = true
      const { id } = args
      const filters = {}
      if (id) filters._id = id
      return Book.findOne(filters, projections)
    },
    books: (obj, args = {}, context, info) => {
      const projections = getProjection(info)
      if (projections.author) projections.authorId = true
      const { author, draft } = args
      const filters = {}
      if (author) filters.authorId = author
      if (typeof draft === 'boolean') filters.draft = draft
      return Book.find(filters, projections)
    },
    page: (obj, { bookId, pageId }, context, info) => Book.findById(bookId).then(book => book.pages.id(pageId)),
  },
  Book: {
    author: (book) => {
      return User.findById(book.authorId)
    }
  },
  Mutation: {
    createBook: (_, { author }) => {
      const book = new Book({
        authorId: author,
      })
      return book.save()
    },
    // Book
    updateBook: (_, { book }) => Book.findByIdAndUpdate(book.id, book, { new: true }),
    deleteBook: (_, { id }) => Book.findByIdAndRemove(id).then(book => book._id),

    createStat: (_, { bookId }) => createBookSubRessource('stats', bookId, new Stat()),
    deleteStat: (_, { bookId, statId }) => deleteBookSubRessource('stats', bookId, statId),

    createPage: (_, { bookId }) => createBookSubRessource('pages', bookId, new Page()),
    deletePage: (_, { bookId, pageId }) => deleteBookSubRessource('pages', bookId, pageId),

    createObject: (_, { bookId }) => createBookSubRessource('objects', bookId, new ObjectModel()),
    deleteObject: (_, { bookId, objectId }) => deleteBookSubRessource('objects', bookId, objectId),

    // Objects
    updateObject: (_, { bookId, object }) => updateBookSubRessource('objects', bookId, object),

    //Stats
    updateStat: (_, { bookId, stat }) => updateBookSubRessource('stats', bookId, stat),

    //Pages
    updatePage: (_, { bookId, page }) => updateBookSubRessource('pages', bookId, page),
    createPageEffect: (_, { bookId, pageId }) => createBookPageSubRessource('effects', bookId, pageId, new Effect()),
    deletePageEffect: (_, { bookId, pageId, effectId }) => deleteBookPageSubRessource('effects', bookId, pageId, effectId),

    createPageTransition: (_, { bookId, pageId }) => createBookPageSubRessource('transitions', bookId, pageId, new Transition({ fromPage: pageId })),
    deletePageTransition: (_, { bookId, pageId, transitionId }) => deleteBookPageSubRessource('transitions', bookId, pageId, transitionId),

    updatePageEffect: (_, { bookId, pageId, effect }) => updateBookPageSubRessource('effects', bookId, pageId, effect),

    //Transition
    updatePageTransition: (_, { bookId, pageId, transition }) => updateBookPageSubRessource('transitions', bookId, pageId, transition),
    createPageTransitionCondition: (_, { bookId, pageId, transitionId }) => createBookPageTransitionSubRessource('conditions', bookId, pageId, new Effect()),
    deletePageTransitionCondition: (_, { bookId, pageId, transitionId, conditionId }) => deleteBookPageTransitionSubRessource('conditions', bookId, pageId, condition),
    updatePageTransitionCondition: (_, { bookId, pageId, transitionId, condition }) => updateBookPageTransitionSubRessource('conditions', bookId, pageId, condition),

    createPageTransitionEffect: (_, { bookId, pageId, transitionId }) => createBookPageTransitionSubRessource('effects', bookId, pageId, new Effect()),
    deletePageTransitionEffect: (_, { bookId, pageId, transitionId, effectId }) => deleteBookPageTransitionSubRessource('effects', bookId, pageId, effect),
    updatePageTransitionEffect: (_, { bookId, pageId, transitionId, effect }) => updateBookPageTransitionSubRessource('effects', bookId, pageId, effect),
  }
}

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})

module.exports = schema
