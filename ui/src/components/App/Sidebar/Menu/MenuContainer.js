import Menu from './Menu'
import { BookService } from 'services'
import { RestHoc, ResourceService } from 'react-rest-resource'
export default RestHoc(Menu, BookService)