import Menu from './Menu'
import { DraftService } from 'services'
import { RestHoc as restHoc } from 'react-rest-resource'
export default restHoc(Menu, DraftService)
