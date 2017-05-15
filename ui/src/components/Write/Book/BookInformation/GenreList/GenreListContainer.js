import GenreList from './GenreList'
import { GenreService } from 'services'
import { RestHoc as restHoc } from 'react-rest-resource'
export default restHoc(GenreList, GenreService)

