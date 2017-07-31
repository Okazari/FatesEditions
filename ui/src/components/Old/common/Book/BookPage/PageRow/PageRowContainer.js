//eslint-disable-next-line
import { RestHoc as restHoc } from 'react-rest-resource'
import PageRow from './PageRow'
import { PageService } from '../../../../../../services'

export default restHoc(PageRow, PageService)
