import BookList from './BookList'
import { BookService } from 'services'
import { RestHoc as restHoc } from 'react-rest-resource'
export default restHoc(BookList, BookService)