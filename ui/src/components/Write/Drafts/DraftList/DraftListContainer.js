//eslint-disable-next-line
import { RestHoc as restHoc } from 'react-rest-resource'
import DraftList from './DraftList'
import { DraftService } from '../../../../services'

export default restHoc(DraftList, DraftService)
