//eslint-disable-next-line
import { RestHoc as restHoc } from 'react-rest-resource'
import { GenreService } from 'services'
import GenreList from './GenreList'

export default restHoc(GenreList, GenreService)
