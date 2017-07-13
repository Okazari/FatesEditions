//eslint-disable-next-line
import { RestHoc as restHoc } from 'react-rest-resource'
import Author from './Author'
import { AuthorService } from '../../../../../services'

export default restHoc(Author, AuthorService)
