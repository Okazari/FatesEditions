//eslint-disable-next-line
import { RestHoc as restHoc } from 'react-rest-resource'
import Book from './Books'
import { GameService } from '../../../services'

export default restHoc(Book, GameService)
