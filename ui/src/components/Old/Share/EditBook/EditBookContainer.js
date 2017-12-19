//eslint-disable-next-line
import { RestHoc as restHoc } from 'react-rest-resource'
import React from 'react'
import Book from './EditBook'
import { BookService } from '../../../../services'

const ConnectedComponent = restHoc(Book, BookService)
const Component = ({ params }) => {
  return <ConnectedComponent bookId={params.bookId} key={params.bookId} />
}
export default Component
