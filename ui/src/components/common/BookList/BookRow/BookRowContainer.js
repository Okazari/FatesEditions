import BookRow from './BookRow'
import { BookService } from 'services'
import { RestHoc as restHoc } from 'react-rest-resource'
export default restHoc(BookRow, BookService)
