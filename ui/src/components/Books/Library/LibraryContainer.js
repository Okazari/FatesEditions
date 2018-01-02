//eslint-disable-next-line
import { RestHoc as restHoc } from 'react-rest-resource'
import { BookService } from 'services'
import Library from './Library'

export default restHoc(Library, BookService)
