//eslint-disable-next-line
import { RestHoc as restHoc } from 'react-rest-resource'
import News from './News'
import { BookService } from '../../../services'

export default restHoc(News, BookService)
