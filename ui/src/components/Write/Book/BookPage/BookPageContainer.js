import BookPage from './BookPage'
import { PageService } from 'services'
import { RestHoc as restHoc } from 'react-rest-resource'
export default restHoc(BookPage, PageService)
