const { makeExecutableSchema } = require('graphql-tools')
const GraphQLJSON = require('graphql-type-json')
const Book = require('../models/BookModel')
const Page = require('../models/PageModel')
const Stat = require('../models/StatModel')
const User = require('../models/UserModel')
const Effect = require('../models/EffectModel')
const Transition = require('../models/TransitionModel')
const ObjectModel = require('../models/ObjectModel')
const Game = require('../models/GameModel.js')
const SHA512 = require('crypto-js/sha512')

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

const gameType = `
  currentPageId : ID
  playerId : ID
  creationDate : String
  lastModificationDate : String
`

const typeDefs = `
  scalar MAP

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
    games: [Game]
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

  type Game {
    id: ID
    ${gameType}
    book: Book
    stats: MAP
    objects: [ID]
  }

  input GameInput {
    id: ID!
    ${gameType}
    book: BookInput
    stats: MAP
    objects: [ID]
  }
  
  type Query {
    books(author: ID, draft: Boolean): [Book]
    book(id: ID!): Book
    author: User
    page(bookId: ID!, pageId: ID!): Page
    tryGame(bookId: ID!): Game
    games: [Game]
    game(gameId: ID!): Game
  }

  type Mutation {
    createBook: User
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
    
    createGame(bookId: ID!): Game
    updateGame(game: GameInput!): Game
    deleteGame(gameId: ID!): User
    
    updatePassword(oldPassword: String!, newPassword: String!, confirmation: String!): User
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

generateGame = (book, playerId) => {
  const stats = book.stats.reduce((acc, stat) => {
    return {
      ...acc,
      [stat._id]: stat.initValue,
    }
  }, {})

  const objects = book.objects.reduce((acc, object) => {
    if (object.atStart) return [...acc, object._id]
    return acc
  }, [])

  return {
    currentPageId: book.startingPageId || book.pages[0].id,
    playerId,
    book,
    stats,
    objects,
  }
}

class UnauthorizedError extends Error {
  constructor(message) {
    super(message)
    this.code = 401
    this.message = message || 'Not authorized'
  }
}

const isAuth = resolver => (obj, args = {}, context, info) => {
  if(!context.user) throw new UnauthorizedError()
  return resolver(obj, args, context, info)
}

const resolvers = {
  MAP: GraphQLJSON,
  Query: {
    book: isAuth((obj, args = {}, context, info) => {
      const { id } = args
      const filters = {}
      if (id) filters._id = id
      return Book.findOne(filters)
    }),
    books: (obj, args = {}, context, info) => {
      const { author, draft } = args
      const filters = {}
      if (author) filters.authorId = author
      if (typeof draft === 'boolean') filters.draft = draft
      return Book.find(filters).sort({ lastModificationDate: -1 })
    },
    author: isAuth((obj, args, context, info) => User.findById(context.user._id)),
    page: isAuth((obj, { bookId, pageId }, context, info) => Book.findById(bookId).then(book => book.pages.id(pageId))),
    
    tryGame: isAuth((_, { bookId }) => Book.findById(bookId).then(generateGame)),
    games: isAuth((_, {}, context) => Game.find({ playerId: context.user.id })),
    game: isAuth((_, { gameId }) => Game.findById(gameId)),
  },
  Book: {
    author: (book) => {
      return User.findById(book.authorId)
    }
  },
  User: {
    drafts: isAuth((user) => {
      return Book.find({ authorId: user.id, draft: true }).sort({ lastModificationDate: -1 })
    }),
    publications: isAuth((user) => {
      return Book.find({ authorId: user.id, draft: false }).sort({ lastModificationDate: -1 })
    }),
    games: isAuth((user) => {
      return Game.find({ playerId: user.id }).sort({ lastModificationDate: -1 })
    }),
  },
  Mutation: {
    createBook: isAuth((_, {}, context) => {
      const book = new Book({
        authorId: context.user._id,
      })
      return book.save().then(book => ({ id: book.authorId }))
    }),
    updateBook: isAuth((_, { book }) => Book.findByIdAndUpdate(book.id, book, { new: true })),
    deleteBook: isAuth((_, { id }) => Book.findByIdAndRemove(id).then(book => ({ id: book.authorId }))),
    publishBook: isAuth((_, { id }) => Book.findByIdAndUpdate(id, { draft: false }, { new: true }).then(book => ({ id: book.authorId }))),
    unpublishBook: isAuth((_, { id }) => Book.findByIdAndUpdate(id, { draft: true }, { new: true }).then(book => ({ id: book.authorId }))),

    createStat: isAuth((_, { bookId }) => findBookById(bookId).then(book => {
      return book.addOne('stats', new Stat())
                 .save()
    })),
    updateStat: isAuth((_, { bookId, stat }) => findBookById(bookId).then(book => {
      return book.selectOne('stats', stat.id)
                 .set(stat)
                 .save()
    })),
    deleteStat: isAuth((_, { bookId, statId }) => findBookById(bookId).then(book => {
      return book.deleteOne('stats', statId)
                 .save()
    })),

    createPageReturnPage: isAuth((_, { bookId }) => findBookById(bookId).then(book => {
      const page = new Page()
      return book.addOne('pages', page)
                 .save()
                 .then(() => page)
    })),
    createPage: isAuth((_, { bookId }) => findBookById(bookId).then(book => {
      return book.addOne('pages', new Page())
                 .save()
    })),
    updatePage: isAuth((_, { bookId, page }) => findBookById(bookId).then(book => {
      return book.selectOne('pages', page.id)
                 .set(page)
                 .save()
    })),
    deletePage: isAuth((_, { bookId, pageId }) => findBookById(bookId).then(book => {
      book.ressource.pages.forEach(page => {
        page.transitions.forEach(transition => {
          if (transition.toPage && transition.toPage === pageId) {
            transition.toPage = undefined
          }
        })
      })
      return book.deleteOne('pages', pageId)
                 .save()
    })),

    createObject: isAuth((_, { bookId }) => findBookById(bookId).then(book => {
      return book.addOne('objects', new ObjectModel())
                 .save()
    })),
    updateObject: isAuth((_, { bookId, object }) => findBookById(bookId).then(book => {
      return book.selectOne('objects', object.id)
                 .set(object)
                 .save()
    })),
    deleteObject: isAuth((_, { bookId, objectId }) => findBookById(bookId).then(book => {
      return book.deleteOne('objects', objectId)
                 .save()
    })),

    createPageEffect: isAuth((_, { bookId, pageId }) => findBookById(bookId).then(book => {
      return book.selectOne('pages', pageId)
                 .addOne('effects', new Effect())
                 .save()
    })),
    updatePageEffect: isAuth((_, { bookId, pageId, effect }) => findBookById(bookId).then(book => {
      return book.selectOne('pages', pageId)
                 .selectOne('effects', effect.id)
                 .set(effect)
                 .save()
    })),
    deletePageEffect: isAuth((_, { bookId, pageId, effectId }) => findBookById(bookId).then(book => {
      return book.selectOne('pages', pageId)
                 .deleteOne('effects', effectId)
                 .save()
    })),

    createPageTransition: isAuth((_, { bookId, pageId }) => findBookById(bookId).then(book => {
      return book.selectOne('pages', pageId)
                 .addOne('transitions', new Transition({ fromPage: pageId }))
                 .save()
    })),
    updatePageTransition: isAuth((_, { bookId, pageId, transition }) => findBookById(bookId).then(book => {
      return book.selectOne('pages', pageId)
                 .selectOne('transitions', transition.id)
                 .set(transition)
                 .save()
    })),
    deletePageTransition: isAuth((_, { bookId, pageId, transitionId }) => findBookById(bookId).then(book => {
      return book.selectOne('pages', pageId)
                 .deleteOne('transitions', transitionId)
                 .save()
    })),

    createPageTransitionCondition: isAuth((_, { bookId, pageId, transitionId }) => findBookById(bookId).then(book => {
      return book.selectOne('pages', pageId)
                 .selectOne('transitions', transitionId)
                 .addOne('conditions', new Effect())
                 .save()
    })),
    updatePageTransitionCondition: isAuth((_, { bookId, pageId, transitionId, condition }) => findBookById(bookId).then(book => {
      return book.selectOne('pages', pageId)
                 .selectOne('transitions', transitionId)
                 .selectOne('conditions', condition.id)
                 .set(condition)
                 .save()
    })),
    deletePageTransitionCondition: isAuth((_, { bookId, pageId, transitionId, conditionId }) => findBookById(bookId).then(book => {
      return book.selectOne('pages', pageId)
                 .selectOne('transitions', transitionId)
                 .deleteOne('conditions', conditionId)
                 .save()
    })),
    createPageTransitionEffect: isAuth((_, { bookId, pageId, transitionId }) => findBookById(bookId).then(book => {
      return book.selectOne('pages', pageId)
                 .selectOne('transitions', transitionId)
                 .addOne('effects', new Effect())
                 .save()
    })),
    updatePageTransitionEffect: isAuth((_, { bookId, pageId, transitionId, effect }) => findBookById(bookId).then(book => {
      return book.selectOne('pages', pageId)
                 .selectOne('transitions', transitionId)
                 .selectOne('effects', effect.id)
                 .set(effect)
                 .save()
    })),
    deletePageTransitionEffect: isAuth((_, { bookId, pageId, transitionId, effectId }) => findBookById(bookId).then(book => {
      return book.selectOne('pages', pageId)
                 .selectOne('transitions', transitionId)
                 .deleteOne('effects', effectId)
                 .save()
    })),
    createGame: isAuth((_, { bookId}, context) => Book.findById(bookId)
      .then(book => generateGame(book, context.user._id))
      .then(game => new Game(game).save())),
    updateGame: isAuth((_, { game }) => Game.findByIdAndUpdate(game.id, game, { new: true }).then(game => game)),
    deleteGame: isAuth((_, { gameId }) => Game.findByIdAndRemove(gameId).then(game => ({ id: game.playerId }))),

    updatePassword: isAuth((_, { oldPassword, newPassword, confirmation }, context) => {
      const paramsNotEmpty = oldPassword === '' || newPassword === '' || confirmation === ''
      const passwordMatch = newPassword !== confirmation
      if (paramsNotEmpty && passwordMatch) {
        throw new Error('Password Error')
      }
      console.log('context.user in updatePassword : ', context.user)
      console.log('context.user._id in updatePassword : ', context.user._id)
      console.log('SHA512(oldPassword) : ', SHA512(oldPassword).toString())
      return User.findOneAndUpdate(
        { _id: context.user._id, password: SHA512(oldPassword).toString()},
        { password: SHA512(newPassword).toString() },
      ).then(user => {
        if (!user) {
          throw new Error('Password Error')
        }
        delete user.password
        return user
      })
    }),
  }
}

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})

module.exports = schema
