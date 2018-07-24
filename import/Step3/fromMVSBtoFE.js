// get book json to import 
const Book = require('../models/BookModel')
const Page = require('../models/PageModel')
const Stat = require('../models/StatModel')
const User = require('../models/UserModel')
const Effect = require('../models/EffectModel')
const Transition = require('../models/TransitionModel')
const ObjectModel = require('../models/ObjectModel')
const Game = require('../models/GameModel.js')
const SHA512 = require('crypto-js/sha512')
// const importedBook = require('./newBook.js')
// const bookConvertedFromHTML = require('./bookConvertedFromHTML.json')
// const importedBook = JSON.parse(bookConvertedFromHTML)
const importedBook = require('./Kroork.js')
const mongoose = require('mongoose')
// const { convertFromHTML, convertToRaw, convertFromRaw, ContentState } = require('draft-js')
// const htmlToDraft = require('html-to-draftjs')
// const { convertFromHTML } = require('draft-convert')
// const jsdom = require('jsdom')
// const { JSDOM } = jsdom
// const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`)
// const { window } = dom
// const { document } = window

// console.log(book)
let booksCount              = 0,
    pagesCount              = 0,
    authorsCount            = 0,
    transitionsCount        = 0,
    author                  = {},
    authorId                = '',
    book                    = {},
    newBookId               = '',
    objects                 = [],
    objectsMapId            = {},
    stats                   = [],
    statsMapId              = {},
    pages                   = [],
    pagesMapId              = {},
    pageEffects             = [],
    pageEffectsMapId        = {},
    transitions             = [],
    transitionsMapId        = {},
    transitionsPagesMapId   = {},
    transitionEffects       = [],
    transitionEffectsMapId  = {},
    conditions              = [],
    conditionsMapId         = {},
    userResult                  ,
    oldStartingPageId
    
const modifyType = effect => {
  if (effect.type === 'stats') {
    effect.type = 'stat'
  } else if (effect.type === 'objects') {
    effect.type = 'object'
  }
  return effect
}

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


// REFORMAT

importedBook.forEach(entrie => {
  if (entrie.authorId) {
    // Book
    booksCount++
    book = { ...entrie }
    // console.log('book before : ', book)
    // book.oldId = book._id.$oid
    delete book._id
    
    delete book.authorName
    delete book.authorId
    
    objects = book.objects.map(object => ({
      ...object,
      description: object.name,
    }))
    delete book.objects
    book.objects = []
    
    stats = book.stats.map(stat => ({
      ...stat,
      min: 0,
      max: 1000,
    }))
    delete book.stats
    book.stats = []
    
    oldStartingPageId = book.startingPageId
    delete book.startingPageId
    delete book.genreId
    book.revisions = 0
    book.pages = []
    // console.log('book after : ', book)
  }
  if (entrie.bookId) {
    // Page
    pagesCount++
    let page = { ...entrie }
    delete page.bookId
    if (page.text == undefined) {
      page.text = page.title
    }
    // console.log('typeOf page.text:', typeof page.text, 'page.title:', page.title)
    // page.text = convertFromHTML(page.text)
    // page.text = JSON.stringify(convertToRaw(page.text))
    // page.text = page.text.replace(/<[^>]*>/, "\n")
    // console.log(page.text)
    // page.text = JSON.stringify(convertToRaw(ContentState.createFromText(page.text)))
    page.description = ''
    if (page.effects.length > 0) {
      pageEffects = [...pageEffects, ...page.effects.map(effect => ({ ...modifyType(effect), pageId: page._id.$oid }))]
    }
    page.effects = []
    pages.push(page)
    // IF PageID = oldStartingPageId => add new ID to book.startingPageId
  }
  if (entrie.fromPage) {
    // Transition
    transitionsCount++
    let transition = { ...entrie }
    if (transition.effects.length > 0) {
      transitionEffects = [...transitionEffects, ...transition.effects.map(effect => ({ ...modifyType(effect), transitionId: transition._id.$oid }))]
    }
    transition.effects = []
    if (transition.conditions.length > 0) {
      conditions = [...conditions, ...transition.conditions.map(condition => ({...modifyType(condition), transitionId: transition._id.$oid }))]
    }
    transition.conditions = []
    transitions.push(transition)
  }
  if (entrie.email) {
    // User
    authorsCount++
    author = {
      username: entrie.username,
      email: entrie.email,
      password: SHA512('fateseditions').toString(),
    }
  }
})


// console.log('stats: ', stats)
// console.log('author:  ', author)
// console.log('objects: ', objects)
// console.log('pages: ', pages)
// console.log('pageEffects: ', pageEffects)
// console.log('transitionEffects: ', transitionEffects)
// console.log('conditions: ', conditions)
// console.log('transitions:', transitions)
// console.log('author:', author)
// console.log('transitionEffects.length: ', transitionEffects.length)
// console.log('conditions.length: ', conditions.length)
// console.log('pageEffects length: ', pageEffects.length)
// console.log('books: ', booksCount)
// console.log('authors: ', authorsCount)
// console.log('pages: ', pagesCount)
// console.log('transitions: ', transitionsCount)



// INSERT
// let uriMongo = `mongodb://${process.env.IP || 'localhost'}:27017/myvirtualstorybook`
// if (process.env.MONGODB_ADDON_URI) {
//     uriMongo = process.env.MONGODB_ADDON_URI
// }
// mongoose.connect(uriMongo)

const host = 'host'
const port = '27017'
const database = 'db'
const username = 'username'
const password = 'password'

mongoose.connect(`mongodb://${username}:${password}@${host}:${port}/${database}`)

async function insert() {
  const newAuthor = await new User(author).save()
  
  book.authorId = newAuthor._id
  const newBook = await new Book(book).save()
  console.log(newBook)
  newBookId = newBook.id
  console.log('newBookId:', newBookId)
  for (obj of objects) {
    const oldId = obj._id.$oid
    delete obj._id
    const book = await findBookById(newBookId)
    const savedBook = await book.addOne('objects', new ObjectModel()).save()
    const currentId = savedBook.objects[savedBook.objects.length -1].id
    objectsMapId[oldId] = currentId
    const bookWithObject = await findBookById(newBookId)
    const savedObj = await bookWithObject.selectOne('objects', currentId).set(obj).save()
  }

  for (stat of stats) {
    const oldId = stat._id.$oid
    delete stat._id
    const book = await findBookById(newBookId)
    const savedBook = await book.addOne('stats', new Stat()).save()
    const currentId = savedBook.stats[savedBook.stats.length -1].id
    statsMapId[oldId] = currentId
    const bookWithStat = await findBookById(newBookId)
    const savedStat = await bookWithStat.selectOne('stats', currentId).set(stat).save()
  }

  for (page of pages) {
    const oldId = page._id.$oid
    delete page._id
    const book = await findBookById(newBookId)
    const savedBook = await book.addOne('pages', new Page()).save()
    const currentId = savedBook.pages[savedBook.pages.length -1].id
    pagesMapId[oldId] = currentId
    const bookWithPage = await findBookById(newBookId)
    const savedPage = await bookWithPage.selectOne('pages', currentId).set(page).save()

    if (oldId === oldStartingPageId) {
      console.log('oldStartingPageId:', oldStartingPageId)
      const book = await findBookById(newBookId)
      const savedStartingPage = await book.set({ startingPageId: currentId }).save()
    }
  }

  for (effect of pageEffects) {
    const book = await findBookById(newBookId)
    const newPageId = pagesMapId[effect.pageId]
    const savedPage = await book.selectOne('pages', newPageId).addOne('effects', new Effect()).save()
    // console.log('savedBook', savedBook)
    const currentId = savedPage.effects[savedPage.effects.length -1].id
    // pageEffectsMapId[]
    if (effect.type === 'stat') {
      effect.subject = statsMapId[effect.subject] 
    } else if (effect.type === 'object') {
      effect.subject = objectsMapId[effect.subject]
    }
    delete effect.pageId
    const bookWithPageEffect = await findBookById(newBookId)
    const savedPageEffect = await bookWithPageEffect.selectOne('pages', newPageId).selectOne('effects', currentId).set(effect).save()
  }

  for (transition of transitions) {
    const oldId = transition._id.$oid
    delete transition._id
    const pageId = pagesMapId[transition.fromPage]
    const book = await findBookById(newBookId)
    const savedPage = await book.selectOne('pages', pageId).addOne('transitions', new Transition()).save()
    const currentId = savedPage.transitions[savedPage.transitions.length -1].id
    transitionsMapId[oldId] = currentId
    transitionsPagesMapId[currentId] = pageId
    transition.fromPage = pagesMapId[transition.fromPage]
    transition.toPage = pagesMapId[transition.toPage]
    const bookWithTransition = await findBookById(newBookId)
    const savedTransition = await bookWithTransition.selectOne('pages', pageId).selectOne('transitions', currentId).set(transition).save()
  }

  for (effect of transitionEffects) {
    const transitionId = transitionsMapId[effect.transitionId]
    const pageId = transitionsPagesMapId[transitionId]
    const book = await findBookById(newBookId)
    const savedTransition = await book.selectOne('pages', pageId).selectOne('transitions', transitionId).addOne('effects', new Effect()).save()
    const currentId = savedTransition.effects[savedTransition.effects.length -1].id
    if (effect.type === 'stat') {
      effect.subject = statsMapId[effect.subject] 
    } else if (effect.type === 'object') {
      effect.subject = objectsMapId[effect.subject]
    }
    delete effect.transitionId
    const bookWithTransition = await findBookById(newBookId)
    await bookWithTransition.selectOne('pages', pageId).selectOne('transitions', transitionId).selectOne('effects', currentId).set(effect).save()
  }

  for (condition of conditions) {
    const transitionId = transitionsMapId[condition.transitionId]
    const pageId = transitionsPagesMapId[transitionId]
    const book = await findBookById(newBookId)
    const savedTransition = await book.selectOne('pages', pageId).selectOne('transitions', transitionId).addOne('conditions', new Effect()).save()
    const currentId = savedTransition.conditions[savedTransition.conditions.length -1].id
    if (condition.type === 'stat') {
      condition.subject = statsMapId[condition.subject]
    } else if (condition.type === 'object') {
      condition.subject = objectsMapId[condition.subject]
    }
    delete condition.transitionId
    const bookWithTransition = await findBookById(newBookId)
    await bookWithTransition.selectOne('pages', pageId).selectOne('transitions', transitionId).selectOne('conditions', currentId).set(condition).save()
  }
  console.log('done')
  // console.log('pagesMapId:', pagesMapId)
  // console.log('statsMapId:', statsMapId)
}
// console.log(newAuthor)
// console.log(objectsMapId)

insert()













// mongoose.connection.close()




// objects.forEach(object => {
  //   easier(book).addOne('objects', object)
  // })
  
// stats.forEach(stat => {
  //   easier(book).addOne('stats', stat)
  // })
