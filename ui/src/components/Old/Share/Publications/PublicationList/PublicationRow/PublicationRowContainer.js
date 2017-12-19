//eslint-disable-next-line
import { RestHoc as restHoc } from 'react-rest-resource'
import PublicationRow from './PublicationRow'
import { BookService } from '../../../../../../services'

export default restHoc(PublicationRow, BookService)
