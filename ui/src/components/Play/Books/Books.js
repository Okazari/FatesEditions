import React from 'react'
import { Content } from '../../App'
import { BookList } from '../../common/Book'

const Books = ({ postResource }) => {
  const startGame = (book) => {
    const stats = {}
    book.stats.forEach((stat) => {
      stats[stat.id] = stat.initValue
    })
    return postResource({ book, currentPageId: book.startingPageId, stats })
  }

  return (
    <Content title="Les livres disponibles" >
      <BookList startGame={startGame} />
    </Content>
  )
}

export default Books
