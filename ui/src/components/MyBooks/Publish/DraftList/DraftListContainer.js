//eslint-disable-next-line
import { RestHoc as restHoc } from 'react-rest-resource'
import { DraftService } from 'services'
import DraftList from './DraftList'

export default restHoc(DraftList, DraftService)
