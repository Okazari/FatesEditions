//eslint-disable-next-line
import { RestHoc as restHoc } from 'react-rest-resource'
import GenreList from './GenreList'
import { GenreService } from '../../../../services'

export default restHoc(GenreList, GenreService)
