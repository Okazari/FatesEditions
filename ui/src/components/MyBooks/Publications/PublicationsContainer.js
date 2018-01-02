//eslint-disable-next-line
import { RestHoc as restHoc } from 'react-rest-resource'
import { BookService } from 'services'
import Publications from './Publications'

export default restHoc(Publications, BookService)
