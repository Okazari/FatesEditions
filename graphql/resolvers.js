const GraphQLJSON = require('graphql-type-json')
const Book = require('../models/BookModel')
const Page = require('../models/PageModel')
const Stat = require('../models/StatModel')
const User = require('../models/UserModel')
const Effect = require('../models/EffectModel')
const Transition = require('../models/TransitionModel')
const ObjectModel = require('../models/ObjectModel')
const Game = require('../models/GameModel')
const Commentary = require('../models/CommentaryModel')
const SHA512 = require('crypto-js/sha512')
const jwt = require('jsonwebtoken')
const mailSender = require('../mailSender')
const helpers = require('./helpers')
const { findBookById, generateGame, isAuth } = helpers

module.exports = {
  MAP: GraphQLJSON,
  Query: {
    book: (obj, args = {}, context, info) => {
      const { id } = args
      const filters = {}
      if (id) filters._id = id
      return Book.findOne(filters)
    },
    showdown: (obj, args = {}, context, info) => {
      return Book.findOne({name: 'Deux mille deux cent vingt deux'})
    },
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
    lastGame: isAuth((_, { bookId }, context) => {
      return Game.find({ playerId: context.user._id, 'book._id': { _id: bookId } })
                 .sort({ lastModificationDate: -1 })
                 .then(games => games[0])
    }),
  },
  Book: {
    author: (book) => {
      return User.findById(book.authorId)
    }
  },
  Commentary: {
    author: (commentary) => {
      return User.findById(commentary.authorId)
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
    publishBook: isAuth((_, { id }) => findBookById(id).then(book => {
      const startingPage = book.ressource.pages.find(page => {
        return page.id == book.ressource.startingPageId
      })
      if (!startingPage) throw new Error('La page de début est manquante')
      book.ressource.draft = false 
      return book.save().then(book => ({ id: book.authorId }))
    })
  ),
    unpublishBook: isAuth((_, { id }, context) => Book.findOneAndUpdate({ _id: id, authorId: context.user._id }, { draft: true }, { new: true }).then(book => ({ id: book.authorId }))),

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
    
    addComment: isAuth((_, { bookId, text }, context) => {
      if (!text) throw Error('Votre commentaire est vide')
      return findBookById(bookId).then(book => {
        return book.addOne('commentaries', new Commentary({ text, authorId: context.user._id }))
                  .save()
      })
    }),
    deleteComment: isAuth((_, { bookId, commentId}, context) => findBookById(bookId).then(book => {
      return book.deleteOne('commentaries', commentId)
                 .save()
    })), 

    signIn: (_, { username, password }) => User.findOne({ username }).then(user => {
      if (user.password != SHA512(password).toString()
        || !username 
        || !password
      ) throw new Error('Error')
      user.password = null
      return jwt.sign({ user }, process.env.SECRET, { expiresIn: 3600 })
    }),

    signUp: (_, args) => {
      const { username, email, password, confirmation } = args
      const empty = !username || !email || !password || !confirmation
      const isEmail = /(.+)@(.+){2,}\.(.+){2,}/.test(email)
      const passwordMatch = password === confirmation
      if (empty) throw new Error('Un ou plusieurs champs sont vides')
      if (!isEmail) throw new Error('Adresse email invalide')
      if (!passwordMatch) throw new Error('Les deux mots de passe ne correspondent pas')
      User.findOne({ username }).then(user => {
        if (user) throw new Error('Nom d\'utilisateur déjà pris')
      })
      return new User({
        username,
        email,
        password: SHA512(password).toString(),
      }).save().then(user => {
        user.password = null
        return jwt.sign({ user }, process.env.SECRET, { expiresIn: 3600 }) 
      })
    },

    updatePassword: isAuth((_, { oldPassword, newPassword, confirmation }, context) => {
      const paramsNotEmpty = oldPassword === '' || newPassword === '' || confirmation === ''
      const passwordMatch = newPassword !== confirmation
      if (paramsNotEmpty && passwordMatch) {
        throw new Error('Password Error')
      }
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

    passwordRecovery: (_, { email }) => {
      const isEmail = /(.+)@(.+){2,}\.(.+){2,}/.test(email)
      if (!isEmail) throw new Error('Adresse email invalide')
      const newPassword = Math.random().toString(36).substr(2, 8)
      return User.findOneAndUpdate(
        { email },
        { password: SHA512(newPassword).toString() },
      ).then(user => {
        if (!user) throw new Error('Utilisateur inconnu')
        
        let mailOptions = {
          from: 'Fates-Editions <fateseditions@gmail.com>',
          to: email,
          subject: 'Récupération de mot de passe',
          text: `Voici votre mot de passe provisoire: ${newPassword}, N'oubliez pas de le changer rapidement ! l'Equipe Fates-Editions.`,
        }
        
        mailSender.sendMail(mailOptions, (err, res) => {
          if (err) {
            console.log(err)
          } else {
            console.log(`Password recovery mail sent to ${email}, user: ${user}`)
          }
        })
        return true
      })
    }
  }
}