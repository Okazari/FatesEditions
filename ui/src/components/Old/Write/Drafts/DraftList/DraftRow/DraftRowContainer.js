//eslint-disable-next-line
import { RestHoc as restHoc } from 'react-rest-resource'
import DraftRow from './DraftRow'
import { DraftService } from '../../../../../../services'

export default restHoc(DraftRow, DraftService)
