import DraftRow from './DraftRow'
import { DraftService } from 'services'
import { RestHoc as restHoc } from 'react-rest-resource'
export default restHoc(DraftRow, DraftService)
