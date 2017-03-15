import React from 'react'
import Book from './Book'
import { BookService } from 'services'
import { RestHoc as restHoc } from 'react-rest-resource'
const ConnectedComponent = restHoc(Book, BookService)
const Component = ({params}) => {
  return <ConnectedComponent bookId={params.bookId}/>
}
export default Component
