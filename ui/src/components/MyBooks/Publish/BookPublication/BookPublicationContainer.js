//eslint-disable-next-line
import { RestHoc as restHoc } from 'react-rest-resource'
import { DraftService } from 'services'
import BookPublication from './BookPublication'

export default restHoc(BookPublication, DraftService)
