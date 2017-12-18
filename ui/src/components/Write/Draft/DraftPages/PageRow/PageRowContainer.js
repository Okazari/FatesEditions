//eslint-disable-next-line
import { RestHoc as restHoc } from 'react-rest-resource'
import { PageService } from 'services'
import PageRow from './PageRow'

export default restHoc(PageRow, PageService)
