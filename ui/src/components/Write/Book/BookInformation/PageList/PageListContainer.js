import {RestHoc as restHoc} from 'react-rest-resource'
import {PageService} from 'services'
import PageList from './PageList'
export default restHoc(PageList, PageService)
