import Genre from './Genre'
import { GenreService } from 'services'
import { RestHoc as restHoc } from 'react-rest-resource'
export default restHoc(Genre, GenreService)
