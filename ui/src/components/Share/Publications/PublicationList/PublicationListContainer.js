//eslint-disable-next-line
import { RestHoc as restHoc } from 'react-rest-resource'
import PublicationList from './PublicationList'
import { BookService } from '../../../../services'

export default restHoc(PublicationList, BookService)
