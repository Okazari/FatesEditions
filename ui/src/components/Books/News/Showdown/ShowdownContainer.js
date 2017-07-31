//eslint-disable-next-line
import { RestHoc as restHoc } from 'react-rest-resource'
import Showdown from './Showdown'
import { BookService } from '../../../../services'

export default restHoc(Showdown, BookService)
