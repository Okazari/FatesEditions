// eslint-disable-next-line
import { RestHoc as restHoc } from 'react-rest-resource'
import { DraftService } from '../../../../../../../../services'
import BookMenuItem from './BookMenuItem'

export default restHoc(BookMenuItem, DraftService)
