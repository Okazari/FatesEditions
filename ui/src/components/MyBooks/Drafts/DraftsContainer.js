//eslint-disable-next-line
import { RestHoc as restHoc } from 'react-rest-resource'
import Drafts from './Drafts'
import { DraftService } from '../../../services'

export default restHoc(Drafts, DraftService)
