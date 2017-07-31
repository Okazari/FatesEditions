// eslint-disable-next-line
import { RestHoc as restHoc } from 'react-rest-resource'
import { DraftService } from '../../../../../services'
import Menu from './Menu'

export default restHoc(Menu, DraftService)
