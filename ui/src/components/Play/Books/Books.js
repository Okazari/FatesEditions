import React from 'react'
import { Content } from 'components/App'
import { BookList } from 'components/common'
const Books = () => {
  return (
    <Content title="Les livres disponibles" >
      <BookList />
    </Content>
  )
}

export default Books
