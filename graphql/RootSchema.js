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
    publications: [Book]
    drafts: [Book]
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

  input UpdatePasswordInput {
    userId: ID!
    oldPassword: String
    newPassword: String
    confirmation: String
  }

  type Query {
    books(author: ID, draft: Boolean): [Book]
    book(id: ID!): Book
    author(id: ID!): User
    page(bookId: ID!, pageId: ID!): Page
  }

  type Mutation {

    createBook(author: ID!): User
    updateBook(book: BookInput!): Book
    deleteBook(id: ID!): User
    publishBook(id: ID!): User
    unpublishBook(id: ID!): User

    createPage(bookId: ID!): Book
    createPageReturnPage(bookId: ID!): Page
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
    updatePageTransitionEffect(bookId: ID!, pageId: ID!, transitionId: ID!, effect: EffectInput!): Effect
    deletePageTransitionEffect(bookId: ID!, pageId: ID!, transitionId: ID!, effectId: ID!): Transition

    createPageTransitionCondition(bookId: ID!, pageId: ID!, transitionId: ID!): Transition,
    updatePageTransitionCondition(bookId: ID!, pageId: ID!, transitionId: ID!, condition: EffectInput!): Effect
    deletePageTransitionCondition(bookId: ID!, pageId: ID!, transitionId: ID!, conditionId: ID!): Transition
    
    updatePassword(data: UpdatePasswordInput!): User
  }
`

const easier = (ressource, save) => {
  const newSave = () => save().then(() => ressource)
  return {
    ressource,
    save: newSave,
    set: newValues => easier(Object.assign(ressource, newValues), save),
    selectOne: (key, id) => easier(ressource[key].id(id), save),
    addOne: (key, newOne) => {
      ressource[key].push(newOne)
      return easier(ressource, save)
    },
    deleteOne: (key, id) => {
      ressource[key] = ressource[key].filter(r => r.id !== id)
      return easier(ressource, save)
    },
  }
}

const findBookById = (bookId) => {
  return Book.findById(bookId).then(book => easier(book, () => book.save()))
}

const resolvers = {
  Query: {
    book: (obj, args = {}, context, info) => {
      const { id } = args
      const filters = {}
      if (id) filters._id = id
      return Book.findOne(filters)
    },
    books: (obj, args = {}, context, info) => {
      const { author, draft } = args
      const filters = {}
      if (author) filters.authorId = author
      if (typeof draft === 'boolean') filters.draft = draft
      return Book.find(filters)
    },
    author: (obj, { id }, context, info) => User.findById(id),
    page: (obj, { bookId, pageId }, context, info) => Book.findById(bookId).then(book => book.pages.id(pageId)),
  },
  Book: {
    author: (book) => {
      return User.findById(book.authorId)
    }
  },
  User: {
    drafts: (user) => {
      return Book.find({ authorId: user.id, draft: true })
    },
    publications: (user) => {
      return Book.find({ authorId: user.id, draft: false })
    },
  },
  Mutation: {
    createBook: (_, { author }) => {
      const book = new Book({
        authorId: author,
      })
      return book.save().then(book => ({ id: book.authorId }))
    },
    // Book
    updateBook: (_, { book }) => Book.findByIdAndUpdate(book.id, book, { new: true }),
    deleteBook: (_, { id }) => Book.findByIdAndRemove(id).then(book => ({ id: book.authorId })),
    publishBook: (_, { id }) => Book.findByIdAndUpdate(id, { draft: false }, { new: true }).then(book => ({ id: book.authorId })),
    unpublishBook: (_, { id }) => Book.findByIdAndUpdate(id, { draft: true }, { new: true }).then(book => ({ id: book.authorId })),

    // createStat: (_, { bookId }) => createBookSubRessource('stats', bookId, new Stat()),
    createStat: (_, { bookId }) => findBookById(bookId).then(book => {
      return book.addOne('stats', new Stat())
                 .save()
    }),
    updateStat: (_, { bookId, stat }) => findBookById(bookId).then(book => {
      return book.selectOne('stats', stat.id)
                 .set(stat)
                 .save()
    }),
    deleteStat: (_, { bookId, statId }) => findBookById(bookId).then(book => {
      return book.deleteOne('stats', statId)
                 .save()
    }),

    createPageReturnPage: (_, { bookId }) => findBookById(bookId).then(book => {
      const page = new Page()
      return book.addOne('pages', page)
                 .save()
                 .then(() => page)
    }),
    createPage: (_, { bookId }) => findBookById(bookId).then(book => {
      return book.addOne('pages', new Page())
                 .save()
    }),
    updatePage: (_, { bookId, page }) => findBookById(bookId).then(book => {
      return book.selectOne('pages', page.id)
                 .set(page)
                 .save()
    }),
    deletePage: (_, { bookId, pageId }) => findBookById(bookId).then(book => {
      return book.deleteOne('pages', pageId)
                 .save()
    }),

    createObject: (_, { bookId }) => findBookById(bookId).then(book => {
      return book.addOne('objects', new ObjectModel())
                 .save()
    }),
    updateObject: (_, { bookId, object }) => findBookById(bookId).then(book => {
      return book.selectOne('objects', object.id)
                 .set(object)
                 .save()
    }),
    deleteObject: (_, { bookId, objectId }) => findBookById(bookId).then(book => {
      return book.deleteOne('objects', objectId)
                 .save()
    }),

    createPageEffect: (_, { bookId, pageId }) => findBookById(bookId).then(book => {
      return book.selectOne('pages', pageId)
                 .addOne('effects', new Effect())
                 .save()
    }),
    updatePageEffect: (_, { bookId, pageId, effect }) => findBookById(bookId).then(book => {
      return book.selectOne('pages', pageId)
                 .selectOne('effects', effect.id)
                 .set(effect)
                 .save()
    }),
    deletePageEffect: (_, { bookId, pageId, effectId }) => findBookById(bookId).then(book => {
      return book.selectOne('pages', pageId)
                 .deleteOne('effects', effectId)
                 .save()
    }),

    createPageTransition: (_, { bookId, pageId }) => findBookById(bookId).then(book => {
      return book.selectOne('pages', pageId)
                 .addOne('transitions', new Transition({ fromPage: pageId }))
                 .save()
    }),
    updatePageTransition: (_, { bookId, pageId, transition }) => findBookById(bookId).then(book => {
      return book.selectOne('pages', pageId)
                 .selectOne('transitions', transition.id)
                 .set(transition)
                 .save()
    }),
    deletePageTransition: (_, { bookId, pageId, transitionId }) => findBookById(bookId).then(book => {
      return book.selectOne('pages', pageId)
                 .deleteOne('transitions', transitionId)
                 .save()
    }),

    createPageTransitionCondition: (_, { bookId, pageId, transitionId }) => findBookById(bookId).then(book => {
      return book.selectOne('pages', pageId)
                 .selectOne('transitions', transitionId)
                 .addOne('conditions', new Effect())
                 .save()
    }),
    updatePageTransitionCondition: (_, { bookId, pageId, transitionId, condition }) => findBookById(bookId).then(book => {
      return book.selectOne('pages', pageId)
                 .selectOne('transitions', transitionId)
                 .selectOne('conditions', condition.id)
                 .set(condition)
                 .save()
    }),
    deletePageTransitionCondition: (_, { bookId, pageId, transitionId, conditionId }) => findBookById(bookId).then(book => {
      return book.selectOne('pages', pageId)
                 .selectOne('transitions', transitionId)
                 .deleteOne('conditions', conditionId)
                 .save()
    }),

    createPageTransitionEffect: (_, { bookId, pageId, transitionId }) => findBookById(bookId).then(book => {
      return book.selectOne('pages', pageId)
                 .selectOne('transitions', transitionId)
                 .addOne('effects', new Effect())
                 .save()
    }),
    updatePageTransitionEffect: (_, { bookId, pageId, transitionId, effect }) => findBookById(bookId).then(book => {
      return book.selectOne('pages', pageId)
                 .selectOne('transitions', transitionId)
                 .selectOne('effects', effect.id)
                 .set(effect)
                 .save()
    }),
    deletePageTransitionEffect: (_, { bookId, pageId, transitionId, effectId }) => findBookById(bookId).then(book => {
      return book.selectOne('pages', pageId)
                 .selectOne('transitions', transitionId)
                 .deleteOne('effects', effectId)
                 .save()
    }),
    updatePassword: (_, { data }) => {
      console.log(data)
    },
  }
}

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})

module.exports = schema
