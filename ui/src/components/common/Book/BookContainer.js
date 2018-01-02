//eslint-disable-next-line
import { RestHoc as restHoc } from 'react-rest-resource'
import { BookService } from 'services'
import Book from './Book'

export default restHoc(Book, BookService)
