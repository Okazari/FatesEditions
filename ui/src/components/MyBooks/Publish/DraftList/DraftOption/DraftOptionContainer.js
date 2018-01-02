//eslint-disable-next-line
import { RestHoc as restHoc } from 'react-rest-resource'
import { DraftService } from 'services'
import DraftOption from './DraftOption'

export default restHoc(DraftOption, DraftService)
