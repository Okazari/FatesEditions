//eslint-disable-next-line
import { RestHoc as restHoc } from 'react-rest-resource'
import Library from './Library'
import { BookService } from '../../../services'

export default restHoc(Library, BookService)
