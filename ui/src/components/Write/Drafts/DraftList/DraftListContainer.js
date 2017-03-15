import DraftList from './DraftList'
import { DraftService } from 'services'
import { RestHoc as restHoc } from 'react-rest-resource'
export default restHoc(DraftList, DraftService)
