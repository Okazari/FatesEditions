import BookMenuItem from './BookMenuItem'
import { BookService } from 'services'
import { RestHoc as restHoc } from 'react-rest-resource'
export default restHoc(BookMenuItem, BookService)