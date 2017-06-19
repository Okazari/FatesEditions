//eslint-disable-next-line
import { RestHoc as restHoc } from 'react-rest-resource'
import DraftOption from './DraftOption'
import { DraftService } from '../../../../../services'

export default restHoc(DraftOption, DraftService)
