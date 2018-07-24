// Sallazar bookId = 568a4d5e399d7d0c030b7909
// Krook bookId = 569cb399b80469fa0260272c

let uri       = 'uri',
  username    = 'username',
  password    = 'password',
  bookId      = '568a4d5e399d7d0c030b7909',
  transitions = [],
  result      = [],
  authorId

var db = connect(uri, username, password)

var book = db.books.find(bookId)
while (book.hasNext()) {
  thisBook = book.next()
  authorId = thisBook.authorId
  result.push(thisBook)
  // printjson(book.next())
}

var pages = db.pages.find({ bookId })
while (pages.hasNext()) {
  let currentPage = pages.next()
  let thisPageTransitions = db.transitions.find({ fromPage: currentPage._id.valueOf() })
  while (thisPageTransitions.hasNext()) {
    let thisTransition = thisPageTransitions.next()
    transitions.push(thisTransition)
  }
  result.push(currentPage)
  // printjson(currentPage)
}

transitions.forEach(function(transition) {
  result.push(transition)
  // printjson(transition)
})

var author = db.players.find(authorId)
while (author.hasNext()) {
  result.push(author.next())
}
printjson(JSON.parse(JSON.stringify(result)))









// BELOW IS TESTING COMMAND NOT USED


// var collections = db.getCollectionNames()
// printjson(collections)

// var games = db.games.find()
// while (games.hasNext()) {
//   printjson(games.next())
// }

// var genres = db.genres.find()
// while (genres.hasNext()) {
//   printjson(genres.next())
// }

// var players = db.players.find()
// while (players.hasNext()) {
//   printjson(players.next())
// }

// var bookId = book.next()._id.valueOf()
// printjson(book.next()._id.valueOf())

// var transitions = db.transitions.find()
// while (transitions.hasNext()) {
//   printjson(transitions.next())
// }

