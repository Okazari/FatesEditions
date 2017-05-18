import PageRow from './PageRow'
import { PageService } from 'services'
import { RestHoc as restHoc } from 'react-rest-resource'
export default restHoc(PageRow, PageService)
