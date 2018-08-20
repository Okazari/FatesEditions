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

const commentaryType = `
  text: String!
  authorId: ID
  creationDate : String
  lastModificationDate : String
`
module.exports = `
  scalar MAP

  type Book {
    id: ID
    ${bookType}
    author: User
    stats: [Stat]
    objects: [Object]
    pages: [Page]
    commentaries: [Commentary]
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

  type Commentary {
    id: ID
    ${commentaryType}
    author: User
  }

  type Query {
    books(author: ID, draft: Boolean): [Book]
    showdown: Book
    book(id: ID!): Book
    author: User
    page(bookId: ID!, pageId: ID!): Page
    tryGame(bookId: ID!): Game
    games: [Game]
    game(gameId: ID!): Game
    lastGame(bookId: ID!): Game
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
    
    addComment(bookId: ID! text: String!): Book
    deleteComment(bookId: ID!, commentId: ID!): Book

    signIn(username: String!, password: String!): String
    signUp(username: String, email: String, password: String, confirmation: String): String
    updatePassword(oldPassword: String!, newPassword: String!, confirmation: String!): User
  }
`