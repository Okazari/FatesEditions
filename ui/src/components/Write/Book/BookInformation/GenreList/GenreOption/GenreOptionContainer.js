import GenreOption from './GenreOption'
import { GenreService } from 'services'
import { RestHoc as restHoc } from 'react-rest-resource'
export default restHoc(GenreOption, GenreService)
