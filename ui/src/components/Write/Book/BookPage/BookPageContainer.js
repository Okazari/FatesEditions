//eslint-disable-next-line
import { RestHoc as restHoc } from 'react-rest-resource'
import BookPage from './BookPage'
import { PageService } from '../../../../services'

export default restHoc(BookPage, PageService)
