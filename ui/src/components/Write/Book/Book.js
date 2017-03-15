import React from 'react'
import { Content } from 'components/App'
import BookInformation from './BookInformation'
import Stat from './BookStat'
import Item from  './BookItem'
import Graph from './BookGraph'
import Page from './BookPage'

const Book = ({book = {}}) => {
  return (
    <Content title="Edition de livre" >
      <div className="row">
        <BookInformation book={book}/>
        <Stat stats={book.stats}/>
        <Item items={book.objects}/>
        <Graph book={book}/>
        <Page query={{bookId: book._id}} bookId={book._id}/>
      </div>
    </Content>
  )
}

export default Book
