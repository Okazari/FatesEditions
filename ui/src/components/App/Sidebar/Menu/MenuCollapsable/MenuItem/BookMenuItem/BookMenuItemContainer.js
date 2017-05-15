import BookMenuItem from './BookMenuItem'
import { DraftService } from 'services'
import { RestHoc as restHoc } from 'react-rest-resource'
export default restHoc(BookMenuItem, DraftService)
