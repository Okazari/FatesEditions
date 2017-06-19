//eslint-disable-next-line
import { RestHoc as restHoc } from 'react-rest-resource'
import BookPublication from './BookPublication'
import { DraftService } from '../../../../services'

export default restHoc(BookPublication, DraftService)
