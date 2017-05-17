//eslint-disable-next-line
import { RestHoc as restHoc } from 'react-rest-resource'
import BookRow from './BookRow'
import { BookService } from '../../../../services'

export default restHoc(BookRow, BookService)
