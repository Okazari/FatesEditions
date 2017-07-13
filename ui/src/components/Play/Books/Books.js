import React from 'react'
import { Content } from '../../App'
import { BookList } from '../../common/Book'

const Books = () => {
  return (
    <Content title="Les livres disponibles" >
      <BookList />
    </Content>
  )
}

export default Books
