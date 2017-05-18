//eslint-disable-next-line
import { RestHoc as restHoc } from 'react-rest-resource'
import { PageService } from '../../../../../../services'
import PageOption from './PageOption'

export default restHoc(PageOption, PageService)
