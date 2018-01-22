const { makeExecutableSchema } = require('graphql-tools')
const Book = require('../models/BookModel')
const Page = require('../models/PageModel')
const Stat = require('../models/StatModel')
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
    updatePageEffect(bookId: ID!, pageId: ID!, effect: EffectInput!): Page
    deletePageEffect(bookId: ID!, pageId: ID!, effectId: ID!): Page

    createPageTransition(bookId: ID!, pageId: ID!): Page
    updatePageTransition(bookId: ID!, pageId: ID!, transition: TransitionInput!): Page
    deletePageTransition(bookId: ID!, pageId: ID!, transitionId: ID!): Page

    createStat(bookId: ID!): Book
    updateStat(bookId: ID!, stat: StatInput!): Book
    deleteStat(bookId: ID!, statId: ID!): Book

    createObject(bookId: ID!): Book
    updateObject(bookId: ID!, object: ObjectInput!): Book
    deleteObject(bookId: ID!, objectId: ID!): Book

    createPageTransitionEffect(bookId: ID!, pageId: ID!, transitionId: ID!): Page,
    updatePageTransitionEffect(bookId: ID!, pageId: ID!, transitionId: ID!, effect: EffectInput!): Page
    deletePageTransitionEffect(bookId: ID!, pageId: ID!, transitionId: ID!, effectId: ID!): Page

    createPageTransitionCondition(bookId: ID!, pageId: ID!, transitionId: ID!): Page,
    updatePageTransitionCondition(bookId: ID!, pageId: ID!, transitionId: ID!, condition: EffectInput!): Page
    deletePageTransitionCondition(bookId: ID!, pageId: ID!, transitionId: ID!, conditionId: ID!): Page

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
    return book.save().then(b => b.pages.id(pageId))
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
    return book.save().then(b => b.pages.id(pageId))
  })
}

const updateBookPageTransitionSubRessource = (key, bookId, pageId, transitionId, ressource) => {
  return Book.findById(bookId).then(book => {
    const index = book.pages.id(pageId).transitions.id(transitionId)[key].findIndex(r => r.id === ressource.id)
    Object.assign(book.pages.id(pageId).transitions.id(transitionId)[key][index], ressource)
    return book.save().then(b => b.pages.id(pageId))
  })
}

const deleteBookPageTransitionSubRessource = (key, bookId, pageId, transitionId, ressourceId) => {
  return Book.findById(bookId).then(book => {
    book.pages.id(pageId).transitions.id(transitionId)[key] = book.pages.id(pageId).transitions.id(transitionId)[key].filter(r => r.id !== ressourceId)
    return book.save().then(b => b.pages.id(pageId))
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
      const book = new Book({
        authorId: author,
      })
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

    createPageEffect: (_, { bookId, pageId }) => createBookPageSubRessource('effects', bookId, pageId, new Effect()),
    updatePageEffect: (_, { bookId, pageId, effect }) => updateBookPageSubRessource('effects', bookId, pageId, effect),
    deletePageEffect: (_, { bookId, pageId, effectId }) => deleteBookPageSubRessource('effects', bookId, pageId, effectId),

    createPageTransition: (_, { bookId, pageId }) => createBookPageSubRessource('transitions', bookId, pageId, new Transition({ fromPage: pageId })),
    updatePageTransition: (_, { bookId, pageId, transition }) => updateBookPageSubRessource('transitions', bookId, pageId, transition),
    deletePageTransition: (_, { bookId, pageId, transitionId }) => deleteBookPageSubRessource('transitions', bookId, pageId, transitionId),

    createPageTransitionEffect: (_, { bookId, pageId, transitionId }) => createBookPageTransitionSubRessource('effects', bookId, pageId, new Effect()),
    updatePageTransitionEffect: (_, { bookId, pageId, transitionId, effect }) => updateBookPageTransitionSubRessource('effects', bookId, pageId, effect),
    deletePageTransitionEffect: (_, { bookId, pageId, transitionId, effectId }) => deleteBookPageTransitionSubRessource('effects', bookId, pageId, effect),

    createPageTransitionCondition: (_, { bookId, pageId, transitionId }) => createBookPageTransitionSubRessource('conditions', bookId, pageId, new Effect()),
    updatePageTransitionCondition: (_, { bookId, pageId, transitionId, condition }) => updateBookPageTransitionSubRessource('conditions', bookId, pageId, condition),
    deletePageTransitionCondition: (_, { bookId, pageId, transitionId, conditionId }) => deleteBookPageTransitionSubRessource('conditions', bookId, pageId, condition),

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
