//eslint-disable-next-line
import { RestHoc as restHoc } from 'react-rest-resource'
import BookList from './BookList'
import { BookService } from '../../../../services'

export default restHoc(BookList, BookService)
