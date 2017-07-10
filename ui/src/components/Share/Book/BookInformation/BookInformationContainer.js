//eslint-disable-next-line
import { RestHoc as restHoc } from 'react-rest-resource'
import BookInformation from './BookInformation'
import { DraftService } from '../../../../services'

export default restHoc(BookInformation, DraftService)
